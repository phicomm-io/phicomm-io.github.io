**RC7 为候选测试版本，包含 RC6 以来的累计变更。升级前备份配置，按型号与变体选择镜像。**

**RC7 is a release candidate with cumulative changes since RC6. Back up configuration and select the matching model and variant.**

- **升级范围与独立主控 / Upgrade scope and separate MCUs**：RC7 累计包含 RC6 之后的有效功能与修复。升级前备份配置并选择对应型号、变体。Wi-Fi OTA 不会自动升级 M1 传感器主控或 G3 屏幕；M1 新增 CRC 修复属于独立、尚未发布的主控更新，不包含在本 Wi-Fi 固件中。原厂 M1 17.x 迁移仍不推荐，G1 适配尚未确认。
  RC7 includes the effective additions and fixes since RC6. Back up configuration and select the matching model and variant. Wi-Fi OTA does not automatically update the M1 sensor MCU or G3 screen. The new M1 CRC fix belongs to a separate, unreleased sensor MCU update and is not bundled in this Wi-Fi firmware. Migration from stock M1 17.x remains discouraged; G1 compatibility remains unconfirmed.

- **中枢请求调度与 HomeKit 恢复 / Hub scheduling and HomeKit recovery**：整理中枢读写请求、能力缓存、设备在线状态与错误反馈，修复 HomeKit 配对及服务恢复；内置 Broker 已移除，局域网设备使用配对 UDP，上游 MQTT 使用外部 Broker。可选 HomeKit 桥接仍为实验功能且默认关闭，不包含 Matter。 精简中枢前端资源，以满足原厂 OTA 容量限制。
  Improve hub read/write scheduling, capability caching, device liveness and errors, and fix HomeKit pairing and service recovery. The embedded broker is removed: LAN peers use paired UDP and upstream MQTT uses an external broker. The optional HomeKit bridge remains experimental and off by default; Matter is not included. Trim hub frontend resources to fit the stock OTA capacity limit.

- **中枢计量与家庭显示 / Hub metering and Home display**：完善 TC1、S30、A1 及空气传感器在中枢中的型号、名称、计量与家庭服务映射；功率更新不刷新其它传感器的采样时间，避免用重复状态维持旧读数。
  Complete model, name, metering and Home service mappings for TC1, S30, A1 and air sensors. Power updates do not refresh other sensors’ sample timestamps, preventing repeated status from keeping old readings alive.

- **M1 内存与主控上传缓存 / M1 memory and MCU upload buffers**：减少 M1 解码过程中的复制，并在主控上传结束后释放上传缓存；保持现有主控升级协议和校验流程。
  Reduce M1 decoder copies and release sensor-MCU upload buffers after transfer, retaining the existing MCU update protocol and verification.

- **原厂依据的传感器补偿与校准 / Factory-informed sensor compensation and calibration**：将可核实的原厂传感器校准、补偿及初始化行为用于 M1 与大金 G2/G3，保留原始数据和有效性判定。读数偏移、恢复与清除按各型号能力执行；M1 主控端改动仍需独立升级。不能把软件补偿当成标准气体标定。
  Apply verified factory calibration, compensation and initialization behavior to M1 and Daikin G2/G3 while retaining raw data and validity checks. Offsets, restoration and reset follow model capabilities; M1 MCU-side changes still require a separate update. Software compensation does not replace reference-gas calibration.

- **PM 休眠与真实采样年龄 / PM sleep and true sample age**：大金 G2 支持 PM 夜间停机与恢复。PM 读数按声明有效期保留真实采样年龄，白天最多 120 秒、夜间最多 1 小时；通信失联仍按短时限失效。M1、局域网、中枢与前端不再用转发或重复回包把旧采样变新。
  Daikin G2 supports scheduled PM shutdown and resume. PM samples retain their true age within the declared lifetime, up to 120 seconds by day or one hour at night; short communication timeouts still apply. M1, LAN, hub and frontend forwarding or repeated replies no longer make old samples appear new.

- **G3 媒体、推送与通知队列 / G3 media, push and notification queues**：完善 JPEG/MJPEG、URL 来源、上传和推送流程，支持稳定通知更新、队列策略及独立过期时间；资源上传与激活检查能力、容量和校验值。摄像头流保留正在发送帧，以最新完整帧替换待发送旧帧，减少积压。
  Complete JPEG/MJPEG, URL sources, upload and push flows with stable notification updates, queue policies and independent expiry. Resource upload and activation check capabilities, capacity and digests. Camera streaming preserves the in-flight frame and replaces queued old frames with the latest complete frame to reduce backlog.

- **摄像头位置与区域适配 / Camera position and region fitting**：从摄像头设置直接打开已有组件，调整位置、大小和画面适配。整行摄像头铺满区域宽度；完整显示模式靠区域顶部，裁剪模式保留居中。网页预览与配套屏幕渲染同步。
  Open the existing camera widget from camera settings to adjust position, size and picture fit. Full-row cameras fill the region width; contain mode aligns to the top while cover remains centered. Web preview and the matching screen renderer agree.

- **指定主页与每页熄屏策略 / Selectable home and per-page standby**：可指定双击返回的主页，并按页独立设置电池与外电等待时间及熄屏亮度；未独立配置的页面继承全局，每周计划继续优先。页面排序保留稳定标识，删除页自动清理引用。旧屏幕仅开放其支持的设置；实际保存改变才递增策略修订号。
  Choose the page reached by double tap and set each page’s battery/external-power idle delays and brightness. Pages without overrides inherit global settings; weekly plans retain priority. Stable page IDs survive reordering and deleted references are pruned. Older screens expose only supported settings; policy revisions advance only for actual changes.

- **TVOC 预热倒计时与时长 / TVOC warmup countdown and duration**：显示真实测量预热倒计时，支持原厂自动或自定义 1–60 分钟，禁止跳过。修改后按已运行时间重算，不重启测量，也不伪造有效读数。预热中的已识别硬件可结束启动加载；失联或未知状态不显示误导倒计时。设置保存于 ESP 并在屏幕新会话时重放，手动校准等待时间保持独立。
  Show measured warmup remaining time and select factory automatic timing or a custom 1–60 minutes; skipping is rejected. Changes use elapsed measurement time without restarting measurement or fabricating valid readings. Identified warming hardware can complete startup loading; unknown/offline states show no misleading countdown. ESP persists and replays settings on a new screen session; manual calibration timing remains separate.

- **串口丢失恢复与状态内存 / UART loss recovery and bounded status memory**：观察到串口硬件溢出或接收环丢字节时，由接收所有者丢弃残片并在边界重同步，保留 CRC、会话与序号验证。维护查询兼容 v3/v4 诊断，额外丢失统计不扩充普通状态；减少视频期间状态编码的内存峰值。
  After observed UART overrun or receive-ring loss, the receive owner discards fragments and resynchronizes at a boundary while preserving CRC, session and sequence validation. Maintenance queries accept v3/v4 diagnostics; extra loss counters stay out of ordinary status. Reduce status-encoding memory peaks during video.

- **时间同步回退 / Time synchronization fallback**：NTP 配置增加 time.windows.com 作为第三来源。完全断电后时间需等待网络授时，天气在时间有效后首次获取；同步恢复后向屏幕下发时间与天气。
  Add time.windows.com as a third NTP source. After complete power loss, time waits for network synchronization and weather starts fetching once time is valid; synchronized time and weather are then delivered to the screen.

- **G3 暖升级已知问题 / Known G3 warm-OTA issue**：部分设备在屏幕 MCU 暖升级安装阶段卡住或出现乱码，需要断开 USB 与电池两路电源后重新上电；只拔 USB 或只重启 ESP 不等于完整断电。最终候选屏幕主控构建仍待实机验收。默认 UART 保持 115200；高波特率和高帧率实验不作为可靠性承诺。升级前保留恢复方法与备份。
  Some devices stall or show garbled output during screen-MCU warm-OTA installation and need complete power removal from both USB and battery before restart. Removing USB alone or restarting only ESP is not complete power removal. The final candidate screen-MCU build still awaits device acceptance. UART remains at 115200 by default; high-baud and high-frame-rate experiments are not a reliability guarantee. Retain recovery access and backups before updating.

- **下载与升级资产核验 / Download and update asset verification**：更新免拆迁移说明和分型号下载，核对所选镜像版本、变体与校验值。S30 继续使用原生 RBL/STOCK_UA；G3 屏幕、恢复镜像、字库与 ESP 资源分别固定来源，不能混用其它型号或版本资产。
  Update migration guides and model-specific downloads with selected image version, variant and digest checks. S30 retains native RBL/STOCK_UA images. G3 screen, recovery, font and ESP resources have separate pinned provenance; do not mix assets from other models or releases.
