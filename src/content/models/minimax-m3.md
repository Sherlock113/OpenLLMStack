---
name: "MiniMax-M3"
org: "MiniMax"
logo: "/logos/minimax.webp"
params: "428B (23B active)"
license: "MiniMax Community License"
releaseDate: "2026-06"
description: "Multimodal MoE with 428B total (23B active) and 1M context. Handles text, image, and video with BF16/MXFP8 precision, deployable on 8× H200 or 4× B200."
url: "https://huggingface.co/MiniMaxAI/MiniMax-M3"
tags: ["MoE", "Multimodal", "1M context"]
family: "MiniMax"
architecture: "MoE"
activeParams: "23B"
contextLength: "1M"
modality: "Multimodal"
modalityNote: "Text, Image, Video"
precisions: ["BF16", "MXFP8"]
deployment: ["8× H200", "4× B200", "8× MI300X"]
huggingfacePath: "MiniMaxAI/MiniMax-M3"
intro: "MiniMax-M3 is MiniMax's multimodal MoE flagship, with 428B total parameters (23B active) and a 1M token context window. Natively multimodal across text, image, and video, it supports BF16 and MXFP8 precision and deploys on a single 8× H200, 4× B200, or 8× MI300X node."
vllmRecipe: "https://recipes.vllm.ai/MiniMaxAI/MiniMax-M3"
sglangCookbook: "https://docs.sglang.io/cookbook/autoregressive/MiniMax/MiniMax-M3"
releaseBlog: "https://huggingface.co/MiniMaxAI/MiniMax-M3"
---
