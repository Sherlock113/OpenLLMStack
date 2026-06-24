---
name: "Qwen3.6-35B-A3B"
org: "Alibaba"
logo: "/logos/qwen.webp"
params: "35B (3B active)"
license: "Apache 2.0"
releaseDate: "2026-04"
description: "Sparse MoE variant of Qwen3.6 with 35B total but only 3B active. 256K context, multimodal (text, image, video), fits on a single H100/H200."
url: "https://huggingface.co/Qwen/Qwen3.6-35B-A3B"
tags: ["MoE", "Multimodal", "Efficient"]
family: "Qwen"
architecture: "MoE"
activeParams: "3B"
contextLength: "256K"
modality: "Multimodal"
modalityNote: "Text, Image, Video"
precisions: ["BF16", "FP8"]
deployment: ["1× H100", "1× H200"]
huggingfacePath: "Qwen/Qwen3.6-35B-A3B"
intro: "Qwen3.6-35B-A3B is the sparse Mixture-of-Experts companion to Qwen3.6-27B — 35B total parameters with only 3B active per token. Multimodal across text, image, and video with a 256K token context window, it preserves Qwen3.6's reasoning quality while offering significantly cheaper inference. Available under Apache 2.0 and runs on a single H100 or H200 GPU at BF16 or FP8 precision."
vllmRecipe: "https://recipes.vllm.ai/Qwen/Qwen3.6-35B-A3B"
sglangCookbook: "https://docs.sglang.io/cookbook/autoregressive/Qwen/Qwen3.6"
releaseBlog: "https://github.com/QwenLM/Qwen3.6"
blogPosts:
  - title: "Qwen 3.6 Series: Alibaba's Open-Source LLM Revolution in 2026"
    url: "https://aimlapi.com/blog/qwen-3-6-series-alibabas-open-source-llm-revolution-in-2026"
  - title: "Alibaba Unveils Qwen3.6-Plus to Accelerate Agentic AI Deployment"
    url: "https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-6-plus-to-accelerate-agentic-ai-deployment-for-enterprises-and-alibaba%E2%80%99s-ai-applications_603000"
  - title: "Qwen by Alibaba in 2026: Free Open-Source AI for Business"
    url: "https://mysummit.school/blog/en/qwen-alibaba-review-2026/"
---
