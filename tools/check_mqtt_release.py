#!/usr/bin/env python3
"""Find the newest completed release with immutable frontend and image metadata."""
import json
import os
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import quote
from urllib.request import Request, urlopen

REPOSITORY = 'phicomm-io/iotcloud-community-mqtt'
BASE = 'https://api.github.com/repos/' + REPOSITORY


def api(path):
    request = Request(BASE + path, headers={
        'Authorization': 'Bearer ' + os.environ['GH_TOKEN'],
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'phicomm-wiki-demo',
    })
    with urlopen(request, timeout=60) as response:
        return json.load(response)


def version(tag):
    import re
    match = re.fullmatch(r'v(\d+)\.(\d+)\.(\d+)(?:-rc(?:\.(\d+))?)?', tag)
    if not match:
        return None
    major, minor, patch, rc = match.groups()
    return (int(major), int(minor), int(patch), '-rc' not in tag, int(rc or 0))


releases = api('/releases?per_page=100')
releases = [r for r in releases if not r['draft'] and version(r['tag_name']) is not None
            and {'frontend.lock.json', 'release-manifest.json'} <= {a['name'] for a in r['assets']}]
release = max(releases, key=lambda r: version(r['tag_name']), default=None)
if release:
    tag = release['tag_name']
    commit = api('/commits/' + quote(tag, safe=''))['sha']
    marker = Path('demos/platform/release.json')
    current = json.loads(marker.read_text()) if marker.exists() else {}
    if current.get('tag') != tag or current.get('commit') != commit:
        with open(os.environ['GITHUB_OUTPUT'], 'a') as output:
            output.write(f'repository={REPOSITORY}\ntag={tag}\ncommit={commit}\n')
