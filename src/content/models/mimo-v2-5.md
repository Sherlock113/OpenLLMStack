---
name: "MiMo-V2.5"
org: "Xiaomi"
logo: "/logos/mimo.webp"
params: "310B (15B active)"
license: "MIT"
releaseDate: "2026-04"
description: "Multimodal MoE with 310B total (15B active) supporting text, image, video, and audio. 1M context length, deployable on 8× H100 or 4× B200."
url: "https://huggingface.co/XiaomiMiMo/MiMo-V2.5"
tags: ["MoE", "Multimodal", "1M context"]
family: "MiMo"
architecture: "MoE"
activeParams: "15B"
contextLength: "1M"
modality: "Multimodal"
modalityNote: "Text, Image, Video, Audio"
precisions: ["FP8"]
deployment: ["8× H100", "4× B200"]
huggingfacePath: "XiaomiMiMo/MiMo-V2.5"
intro: "MiMo-V2.5 is Xiaomi's compact sibling to V2.5-Pro — a 310B-parameter sparse Mixture-of-Experts model with 15B active parameters, trained on 48T tokens. Natively multimodal across text, image, video, and audio, it supports a 1M token context window at FP8 precision and runs on a single 8× H100 or 4× B200 node, making it accessible for production multimodal workloads."
vllmRecipe: "https://recipes.vllm.ai/XiaomiMiMo/MiMo-V2.5"
sglangCookbook: "https://docs.sglang.io/cookbook/autoregressive/Xiaomi/MiMo-V2.5"
releaseBlog: "https://mimo.xiaomi.com/mimo-v2-5/"
blogPosts:
  - title: "Xiaomi MiMo V2.5 Review: Beats Claude Opus on Token Cost"
    url: "https://www.ai.cc/blogs/xiaomi-mimo-v2-5-review/"
  - title: "Xiaomi MiMo-V2.5 Agent Model Guide: Pricing, Models, Claude Code, OpenCode"
    url: "https://devtk.ai/en/blog/xiaomi-mimo-v2-5-agent-model-guide-2026/"
  - title: "Xiaomi MiMo-V2.5 Series Large Model Launches Public Beta"
    url: "https://platform.xiaomimimo.com/docs/en-US/news/v2.5-news"
---
