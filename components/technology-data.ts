/**
 * 보유기술 데이터 — /technology 페이지의 단일 소스.
 * 각 항목은 페이지 내 섹션 앵커(id)로 연결되며, 헤더 "보유기술" 드롭다운과 1:1로 대응한다.
 * 본문 콘텐츠는 추후 채운다(현재는 플레이스홀더).
 */

/** 기술 항목의 세부 블록 — 솔루션 상세(sol-detail) 레이아웃을 그대로 재사용한다. */
export type TechBlock = {
  /** 제품/모듈 코드(accent 배지) — 예: "Ariel Ingest Manager" */
  code: string;
  /** 블록 제목 */
  title: string;
  /** 영문 부제(모노 캡션) */
  sub: string;
  /** 한 문단 설명 */
  desc: string;
  /** 세부 기능 목록 */
  points: string[];
  /** 블록 이미지 경로. asset()로 감싼다. */
  image?: string;
  /** 작은 아이콘/세로형 이미지 — 확대하지 않고 자연 크기로 가운데 표시한다. */
  imageNarrow?: boolean;
  /** 평면(미디어 처리) 이미지의 렌더 폭(px). 원본이 너무 작거나 커서 크기를 맞출 때 사용. */
  imageWidth?: number;
  /** 평면 이미지를 레이아웃(카드 높이) 변화 없이 시각적으로만 확대하는 배율(예: 1.1). */
  imageScale?: number;
};

export type Technology = {
  /** 섹션 앵커 식별자 = URL 해시 (예: "ingest" → /technology/#ingest) */
  id: string;
  /** 영문 분류 코드(모노 캡션) */
  code: string;
  /** 메뉴·섹션 제목 */
  title: string;
  /** 한 줄 요약(목차·플레이스홀더용) */
  summary: string;
  /** 섹션 리드 문단(상세 콘텐츠가 있는 항목). 없으면 summary를 플레이스홀더로 표시. */
  intro?: string;
  /** 세부 블록(이미지 + 텍스트). 있으면 상세 섹션을 렌더링한다. */
  blocks?: TechBlock[];
};

export const TECHNOLOGIES: Technology[] = [
  {
    id: "ingest",
    code: "INGEST & ENCODING",
    title: "Ingest & Video Encoding",
    summary:
      "From commercial video server integration to real-time IO-board encoding, we bring a wide range of sources into the system.",
    intro:
      "The first stage where media enters the system. From ingest management that controls commercial video servers to IO-board-based real-time encoding, we ingest diverse input sources into broadcast and archive formats.",
    blocks: [
      {
        code: "Ariel Ingest Manager",
        title: "Video Server-Based Ingest",
        sub: "Video Server Ingest",
        desc: "Controls commercial video servers such as Harmonic, Grass Valley, and Imagine to acquire media. For customers who need only ingest management, it also integrates with third-party MAM and storage systems.",
        points: [
          "Commercial video server control — Controls major video servers such as Harmonic, Grass Valley, and Imagine via VDCP and transfers media over FTP.",
          "Flexible integration — Delivers ingest results to Geminisoft MAM via RESTful + MXF, and to third-party MAM via XML + MXF.",
          "Standalone ingest — The ingest management function can be deployed on its own, running on top of your existing MAM and storage.",
        ],
        image: "/assets/technology/ingest/ariel-ingest-manager.jpg",
      },
      {
        code: "Proxima Open Encoder",
        title: "IO Board-Based Real-Time Encoding",
        sub: "Open Encoder",
        desc: "Receives video input through an IO board and generates video in a variety of formats using software codecs. A single unit handles basic broadcast operations.",
        points: [
          "Software codec encoding — Converts DVD, video server, satellite/cable, and VCR inputs received through the IO board into a variety of formats.",
          "Two playback modes — Provides back-to-back playback for short in-house broadcasts and TAKE mode for live inserts.",
          "All-in-one operation — Handles everything from encoding to playout and tape out in a single system.",
        ],
        image: "/assets/technology/ingest/proxima-open-encoder.png",
      },
    ],
  },
  {
    id: "processing",
    code: "MEDIA PROCESSING",
    title: "Media Processing",
    summary:
      "Covers GPU transcoding, lossless rewrapping, smart-rendering editing, scene analysis, and loudness measurement.",
    intro:
      "Media conversion technologies for efficient video processing. From rewrapping that changes formats without re-encoding to GPU-accelerated transcoding, smart-rendering editing, scene analysis, and loudness measurement, we cover the full range of broadcast post-processing.",
    blocks: [
      {
        code: "Ariel Transcoder",
        title: "GPU-Accelerated Transcoder",
        sub: "GPU Transcoder",
        desc: "Converts video across a wide range of codecs into broadcast and distribution formats with GPU acceleration. Accepts multiple input codecs and rapidly encodes to IMX SD, XDCAM HD, and H.264.",
        points: [
          "Broad input codec support — Accepts MPEG-2, MPEG-4, DV, and ProRes/DNxHD families as input.",
          "Broadcast and distribution output — Converts to IMX SD, XDCAM HD, and H.264 families.",
          "GPU acceleration — Processes XDCAM to H.264 (IPTV quality) at approximately 6.9x real time on Intel Pro Graphics GPUs.",
        ],
        image: "/assets/technology/media/ariel-transcoder.png",
        imageNarrow: true,
        imageWidth: 260,
      },
      {
        code: "Rewrapper",
        title: "Lossless Rewrapping",
        sub: "Rewrapper",
        desc: "Changes only the wrapper (container) without re-encoding the video, converting formats in a short time with no quality loss.",
        points: [
          "Lossless rewrapping — Converts containers between MXF ↔ MOV and TS ↔ MP4 without re-encoding.",
          "Broadcast and editing format compatibility — Converts between broadcast MXF and Apple MOV.",
          "Recorded TS to MP4 — Generates MP4 files from recorded TS video.",
        ],
        image: "/assets/technology/media/rewrapper.png",
        imageNarrow: true,
        imageWidth: 260,
      },
      {
        code: "Cutting & Merge",
        title: "Video Cutting & Merge",
        sub: "Cutting & Merge",
        desc: "Creates new video by cutting and joining segments based on cut information. Smart rendering avoids re-encoding the entire file, keeping processing fast.",
        points: [
          "Smart rendering — Re-encodes only the cut sections (GOP boundaries) and joins the rest as-is, reducing processing time.",
          "Cut & merge — Cuts multiple segments and produces a single output file.",
          "Wide codec support — Supports H.264/AAC/MP4, H.265 (HEVC), IMX 30/40/50Mbps, DV25/DVCPRO, and AVC-Intra.",
        ],
        image: "/assets/technology/media/cutting-merge.png",
      },
      {
        code: "Ariel Catalog",
        title: "Scene Analysis & Cataloging",
        sub: "Cataloging",
        desc: "Analyzes video scenes to detect scene-change points and generates key frames displayed in the MAM interface, so content can be browsed at a glance.",
        points: [
          "Scene change detection — Automatically finds transition points using scene change detection.",
          "Key frame generation — Extracts representative frames per segment to build a storyboard.",
          "MAM integration — Builds a grid image board referenced during playback for instant review in the MAM.",
        ],
        image: "/assets/technology/media/ariel-catalog.png",
        imageWidth: 380,
      },
      {
        code: "Loudness Detection",
        title: "Loudness Detection",
        sub: "Loudness Detection",
        desc: "Measures perceived loudness in line with international standards, calculating loudness in accordance with ITU-R BS.1770.",
        points: [
          "International standard measurement — Measures perceived loudness to the ITU-R BS.1770 specification.",
          "Standard units — Provides results in dB LKFS and dB LUFS.",
          "Real-time and file-based measurement — Supports real-time metering and file-based measurement (Integrated, Short-Term, Momentary, True Peak).",
        ],
        image: "/assets/technology/media/loudness.png",
      },
    ],
  },
  {
    id: "nle",
    code: "NLE INTEGRATION",
    title: "NLE Integration",
    summary:
      "Plugins for major NLE editing systems and a web-based editor upload edited content directly to the MAM.",
    intro:
      "We provide plugin technology that integrates with the world's major NLE editing systems. Edited video can be uploaded directly to the MAM without a separate program. Unlike competitors that support only one or two systems, we broadly support major NLE platforms.",
    blocks: [
      {
        code: "NLE Plug-in",
        title: "NLE Plugin Integration",
        sub: "NLE Plug-in",
        desc: "A MAM transfer menu is embedded in the menus of major NLE editing systems, sending video from the editing system straight to the MAM — no separate program required.",
        points: [
          "In-menu transfer — A MAM transfer item is built into the editing system's menu, uploading edited content directly to the MAM.",
          "Broad support — Supports Adobe Premiere, Apple Final Cut Pro X, GrassValley EDIUS, and Avid Media Composer.",
          "Differentiated compatibility — Unlike competitors that support only one or two systems, we integrate broadly with major NLE platforms.",
        ],
        image: "/assets/technology/nle/nle-plugin.jpg",
      },
      {
        code: "Web NLE",
        title: "Web-Based Video Editing",
        sub: "Web Video Editor",
        desc: "Create and edit video in a web browser without desktop software such as Adobe Premiere. Export edited content directly to platforms like YouTube.",
        points: [
          "No installation required — Create and edit video content with nothing but a browser.",
          "Timeline editing — Place media, text, and audio on the timeline to build cuts and subtitles.",
          "Instant distribution — Export edited content directly to platforms such as YouTube.",
        ],
        image: "/assets/technology/nle/web-nle.png",
      },
    ],
  },
  {
    id: "archive",
    code: "ARCHIVE SYSTEM",
    title: "Archive System Technology",
    summary:
      "Third-party archive solution integration and our in-house IMArchive keep media stored safely and economically.",
    intro:
      "Keeping media data only on shared storage such as SAN or NAS makes instant access convenient, but drives up costs and increases the risk of data loss. Geminisoft overcomes this limitation through archive solution integration, storing media safely and economically.",
    blocks: [
      {
        code: "3rd Party Archive",
        title: "Third-Party Archive Integration",
        sub: "3rd Party Integration",
        desc: "Integrates with a wide range of external archive solutions, layering directly on top of the archive environment already in operation.",
        points: [
          "Multi-solution support — Integrates with Oracle DIVArchive, Masstech-SGL FlashNet, Quantum StorNext (Artico), and SpectraLogic BlackPearl.",
          "Leverage existing environments — Connects your deployed archive solution to the MAM workflow without replacing it.",
          "Workflow automation — Automates archiving and restoration through workflows.",
        ],
        image: "/assets/technology/archive/third-party.png",
      },
      {
        code: "IMArchive",
        title: "In-House Archive Platform IMArchive",
        sub: "In-house Archive Platform",
        desc: "An archive platform developed in-house by Geminisoft. Stores media on a range of media types, from LTFS-based tape to ODA.",
        points: [
          "LTFS-based archiving — Archives media to LTFS libraries from Quantum, Oracle, and others.",
          "ODA archiving — Uses SONY ODA hardware to store media on optical disc.",
          "Storage integration — Integrates with various storage systems to manage archiving and restoration.",
        ],
        image: "/assets/technology/archive/imarchive.png",
      },
    ],
  },
  {
    id: "transfer",
    code: "MEDIA TRANSFER",
    title: "Media Transfer",
    summary:
      "A Transfer Manager built on broadcast delivery know-how handles destination-specific format conversion and accelerated transfer in one pass.",
    intro:
      "Broadcast video servers and media delivery often require transfer methods that differ from ordinary file copying. Our Transfer Manager, built on broadcast video delivery know-how, handles format conversion and transfer tailored to each destination.",
    blocks: [
      {
        code: "Ariel Transfer",
        title: "Transfer Manager",
        sub: "Transfer Manager",
        desc: "Transfers media between storage and web, VOD, and video servers, converting to the format each destination requires. Also supports accelerated transfer and file verification.",
        points: [
          "Destination-specific format delivery — Exports MP4 + XML (FTP/HTTP) to web servers, MP4 (FTP) to VOD servers, and MXF (FTP) to video servers.",
          "Broadcast format conversion — Seamlessly converts between MOV ↔ MXF and LXF ↔ MXF.",
          "Accelerated & remote transfer — Rapidly delivers large media files to remote sites via WDT, Aspera, and more.",
          "File verification — Generates MD5 hashes to verify the integrity of large source files.",
          "Video server integration — Transfers to commercial video servers such as Omneon, Grass Valley, and Imagine.",
        ],
        image: "/assets/technology/transfer/ariel-transfer.png",
      },
    ],
  },
  {
    id: "workflow",
    code: "WORKFLOW",
    title: "Workflow Management",
    summary:
      "The workflow editor built into the MAM lets anyone easily define and modify complex processing pipelines.",
    intro:
      "Learning business process tools and drawing diagrams is no easy task. With the workflow editor built into the MAM, anyone can easily define and modify complex media processing pipelines.",
    blocks: [
      {
        code: "Workflow Editor",
        title: "Workflow Editing",
        sub: "Workflow Editor",
        desc: "A workflow editing tool built into the MAM solution. Groups processing steps such as ingest, conversion, and cataloging into tasks and composes the flow visually.",
        points: [
          "Visual flow composition — Links processing steps into a diagram, such as ingest transfer → video analysis → proxy generation → thumbnail & catalog generation.",
          "Task presets — Registers frequently used tasks — S-MAM transfer, storage transfer, MCR transfer, SNS distribution formats — as presets you can drag and drop.",
          "Fine-grained parameter control — Specifies per-step parameters such as target paths, start conditions (after the previous task completes), resolution, and bitrate.",
          "Easy to define and modify — Define workflows and change them on the spot without learning a separate process tool.",
        ],
        image: "/assets/technology/workflow/workflow-editor.png",
      },
    ],
  },
  {
    id: "ai-compensation",
    code: "AI DYNAMIC",
    title: "AI Dynamic Compensation",
    summary:
      "Deep learning frame interpolation generates intermediate frames to raise frame rates and smooth out motion.",
    intro:
      "Generates new intermediate frames between consecutive frames of existing video, raising the frame rate and making motion smoother. A deep learning-based frame prediction model produces naturally flowing video.",
    blocks: [
      {
        code: "Frame Interpolation",
        title: "AI Frame Interpolation",
        sub: "Frame Interpolation",
        desc: "A deep learning-based frame prediction model analyzes the optical flow between two consecutive frames to generate naturally connected intermediate frames.",
        points: [
          "Deep learning frame prediction — Analyzes optical flow between consecutive frames to create intermediate frames.",
          "Smooth motion — Raises the frame rate to effectively reduce motion blur and stuttering in low-frame-rate video.",
          "Natural interpolation — Generates new motion-aware frames rather than simple duplicates.",
        ],
        image: "/assets/technology/ai/frame-interpolation.png",
      },
      {
        code: "Processing Pipeline",
        title: "Split, Interpolate & Merge Processing",
        sub: "Processing Pipeline",
        desc: "Separates audio and frames from the source video, interpolates only the frames, then remerges them with the original audio for output — exported in formats suited to broadcast environments.",
        points: [
          "Split, interpolate & merge — Extracts audio and frames from the source, interpolates the frames, then merges them back with the original audio for output.",
          "Multiple scan types — Supports both progressive and interlaced video.",
          "Broadcast-standard output — Outputs at the broadcast-standard 29.97fps, ready for immediate use in broadcast environments.",
        ],
        image: "/assets/technology/ai/pipeline.png",
        imageScale: 1.12,
      },
    ],
  },
];

/** 헤더/푸터 내비게이션에서 쓰는 드롭다운 링크 목록. */
export const TECHNOLOGY_NAV = TECHNOLOGIES.map((t) => ({
  label: t.title,
  href: `/technology/#${t.id}`,
}));
