---
name: "GLM-5.2"
org: "Zhipu AI"
logo: "/logos/glm.webp"
params: "753B (40B active)"
license: "MIT"
releaseDate: "2026-06"
description: "Zhipu's MoE flagship with 753B total parameters (40B active) and 1M context. Tuned for long-horizon agent workflows, reasoning, and coding with BF16/FP8 precision."
url: "https://huggingface.co/zai-org/GLM-5.2"
tags: ["MoE", "Reasoning", "Coding"]
family: "GLM"
architecture: "MoE"
activeParams: "40B"
contextLength: "1M"
modality: "Text"
precisions: ["BF16", "FP8"]
deployment: ["8× H200", "8× B200", "8× MI355X"]
useCase: "Long-horizon agent workflows, reasoning, and coding"
huggingfacePath: "zai-org/GLM-5.2"
intro: "GLM-5.2 is Zhipu AI's open source MoE flagship, scaling the GLM-5 line to 753B total parameters (40B active) with a 1M token context window. Built for long-horizon agent workflows, reasoning, and coding, it supports BF16 and FP8 precision and runs on a single 8-GPU node (8× H200, 8× B200, or 8× MI355X)."
vllmRecipe: "https://recipes.vllm.ai/zai-org/GLM-5.2"
sglangCookbook: "https://docs.sglang.io/cookbook/autoregressive/GLM/GLM-5.2"
releaseBlog: "https://huggingface.co/zai-org/GLM-5.2"
---
