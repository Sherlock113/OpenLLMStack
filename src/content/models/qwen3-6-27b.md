---
name: "Qwen3.6-27B"
org: "Alibaba"
logo: "/logos/qwen.webp"
params: "27B"
license: "Apache 2.0"
releaseDate: "2026-04"
description: "Dense 27B model from the Qwen3.6 family with 256K context and multimodal support (text, image, video). Runs on a single H100 or H200."
url: "https://huggingface.co/Qwen/Qwen3.6-27B"
tags: ["Dense", "Multimodal", "256K context"]
family: "Qwen"
architecture: "Dense"
contextLength: "256K"
modality: "Multimodal"
modalityNote: "Text, Image, Video"
precisions: ["BF16", "FP8"]
deployment: ["1× H100", "1× H200"]
huggingfacePath: "Qwen/Qwen3.6-27B"
intro: "Qwen3.6-27B is Alibaba's first dense open-weight model in the Qwen3.6 family, released April 22, 2026 on Hugging Face and ModelScope under the Apache 2.0 license. Natively multimodal across text, image, and video with a 256K token context window, the 27B dense architecture runs on a single H100 or H200 GPU — and notably matches or beats much larger MoE models on coding benchmarks at a fraction of the deployment cost."
vllmRecipe: "https://recipes.vllm.ai/Qwen/Qwen3.6-27B"
sglangCookbook: "https://docs.sglang.io/cookbook/autoregressive/Qwen/Qwen3.6"
releaseBlog: "https://github.com/QwenLM/Qwen3.6"
blogPosts:
  - title: "Qwen3.6-27B: 27B Model Beats 397B on Coding"
    url: "https://www.buildfastwithai.com/blogs/qwen3-6-27b-review-2026"
  - title: "Qwen 3.6 Series: Alibaba's Open Source LLM Revolution in 2026"
    url: "https://aimlapi.com/blog/qwen-3-6-series-alibabas-open-source-llm-revolution-in-2026"
  - title: "Qwen 3.6 Deep Dive: Alibaba's Hybrid-Thinking Powerhouse"
    url: "https://localclaw.io/blog/qwen3-6-deep-dive"
---
