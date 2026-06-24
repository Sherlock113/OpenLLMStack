---
name: "DeepSeek-V4-Pro"
org: "DeepSeek"
logo: "/logos/deepseek.webp"
params: "1.6T (49B active)"
license: "MIT"
releaseDate: "2026-04"
description: "Flagship MoE model with 1.6T total parameters and 1M context. Built for advanced reasoning, coding, and long-horizon agent workflows. Mixed FP4 + FP8 precision."
url: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro"
tags: ["MoE", "1M context", "Reasoning"]
family: "DeepSeek"
architecture: "MoE"
activeParams: "49B"
contextLength: "1M"
modality: "Text"
attentionArchitecture: "Multi-head Latent Attention (MLA)"
precisions: ["FP4 + FP8 Mixed"]
deployment: ["8× H200", "8× B200"]
useCase: "Advanced reasoning, coding, and long-horizon agent workflows"
huggingfacePath: "deepseek-ai/DeepSeek-V4-Pro"
intro: "DeepSeek-V4-Pro is the flagship of the V4 family, targeting frontier-level reasoning, coding, and agentic workflows. Built on DeepSeek's MoE architecture with Multi-head Latent Attention (MLA), it ships with 1.6T total parameters (49B active per token) and a 1M token context window. Released on April 24, 2026 under the MIT license, it is available immediately via the DeepSeek API and as open weights on Hugging Face."
vllmRecipe: "https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4-Pro"
sglangCookbook: "https://docs.sglang.io/cookbook/autoregressive/DeepSeek/DeepSeek-V4"
releaseBlog: "https://www.atlascloud.ai/blog/ai-updates/what-is-deepseek-v4"
blogPosts:
  - title: "DeepSeek V4: Release Date, Features, Benchmarks"
    url: "https://codersera.com/blog/deepseek-v4-release-date-features-benchmarks/"
  - title: "DeepSeek V4 Guide: Engram Memory, Training Data Strategy & Release Status"
    url: "https://kili-technology.com/blog/data-story-deepseek-v4"
  - title: "DeepSeek V4 Preview: API Models, Pricing and Changes"
    url: "https://evolink.ai/blog/deepseek-v4-release-window-prep"
---
