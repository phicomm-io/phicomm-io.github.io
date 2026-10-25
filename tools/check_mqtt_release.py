#!/usr/bin/env python3
"""Find a completed stable release with an immutable frontend lock asset."""
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


try:
    release = api('/releases/latest')
except HTTPError as error:
    if error.code != 404:
        raise
    release = None
if release and not release['draft'] and not release['prerelease']:
    tag = release['tag_name']
    assets = {asset['name'] for asset in release['assets']}
    if tag.startswith('v') and 'frontend.lock.json' in assets:
        commit = api('/commits/' + quote(tag, safe=''))['sha']
        marker = Path('demos/platform/release.json')
        current = json.loads(marker.read_text()) if marker.exists() else {}
        if current.get('tag') != tag or current.get('commit') != commit:
            with open(os.environ['GITHUB_OUTPUT'], 'a') as output:
                output.write(f'repository={REPOSITORY}\ntag={tag}\ncommit={commit}\n')
