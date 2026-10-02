// Issue dates are when a summary appears on PaperCut; publishedDate is the paper's publication date.
export const papers = [
{
  "slug": "sonoworld-image-to-audio-visual-scene",
  "date": "2026-10-02",
  "publishedDate": "2026-03-30",
  "topic": "3D audio-visual generation",
  "title": "SonoWorld: From One Image to a 3D Audio-Visual Scene",
  "authors": "Derong Jin, Xiyi Chen, Ming C. Lin, Ruohan Gao",
  "venue": "CVPR 2026 · first public 30 Mar 2026",
  "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.html",
  "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.pdf",
  "summary": "SonoWorld turns one image into a navigable 3D scene with visually grounded, position-dependent spatial audio.",
  "care": "It connects single-image world generation to an often omitted modality: sound that changes with viewpoint and listener position.",
  "readMinutes": 5,
  "visuals": {
    "hero": {
      "src": "./assets/images/sonoworld-pipeline.jpg?v=20261002",
      "alt": "Original SonoWorld pipeline: panorama calibration and outpainting, 3D Gaussian scene generation, VLM-guided panoramic sound-source grounding, ambisonics encoding and pose-dependent rendering.",
      "caption": "Figure 3 — SonoWorld's full pipeline from one image to a 3D visual scene and spatial audio field. Original figure by Jin et al. (CVPR 2026).",
      "creditUrl": "https://arxiv.org/html/2603.28757v1#S4.F3"
    }
  },
  "sections": {
    "TL;DR": [
      "SonoWorld is a training-free pipeline for Image2AVScene: from one RGB image it builds a navigable 3D visual scene, grounds likely sound sources in 3D and renders pose-dependent ambisonic audio for point, extended and ambient sources."
    ],
    "Why I might care": [
      "The queue's work on generative video and multimodal evidence asks what a generated world preserves beyond appearance. SonoWorld makes spatial sound an explicit, testable layer. My proposed test: hold the reconstructed geometry fixed, perturb or remove visually inferred sound anchors, and measure whether users can detect semantic errors separately from direction errors. This is my proposal; the authors do not report this intervention."
    ],
    "Why it matters": [
      "Single-image 3D generators can produce scenes that look explorable but remain silent. Spatial audio needs both plausible content and geometry-aware direction, extent and attenuation as the listener moves."
    ],
    "Main idea": [
      "Use one panoramic coordinate system to couple scene generation and sound. A language model proposes sound-producing categories and acoustic attributes; open-vocabulary and class-agnostic masks locate them over the full panorama; their 3D lifts drive an analytic ambisonics renderer."
    ],
    "Method": [
      "The input is calibrated for gravity and field of view, warped into an equirectangular view, outpainted to 360 degrees and lifted with HunyuanWorld-1.0 or Marble into Gaussian splats or a mesh. GPT-5 or LLaVA-Next-34B proposes sounding categories, source types, prompts and relative levels. X-Decoder masks perspective tiles; SAM2 supplies panorama-wide proposals; voting merges them before depth-based unprojection. MMAudio generates source and ambient waveforms, which are equalized and encoded as ambisonics with distance and air attenuation, then decoded to binaural audio with an HRTF at the listener pose."
    ],
    "Experiments": [
      "SonoScene360 contains 68 synchronized 360-degree-video/first-order-ambisonics clips from six real scenes. Against MMAudio, SEE-2-SOUND, ViSAGe and OmniAudio, the proprietary SonoWorld configuration reports geodesic direction error 0.728, spherical-energy CC 0.658 and AUC 0.838; OmniAudio reports 1.449, 0.148 and 0.588. Lower direction error and higher CC/AUC are better. The open-source configuration reports 0.975, 0.491 and 0.753, so the strongest numbers depend on proprietary Marble and GPT-5 components.",
      "For semantic alignment on the same dataset, the proprietary configuration reaches 67.6% directional CLAP R-Precision, D-CLAP audio similarity 0.480 and text similarity 0.457; MMAudio reaches 33.8%, 0.345 and 0.322 but has no spatial scores. A 50-participant, 12-scene pairwise study also prefers SonoWorld over MMAudio and OmniAudio; the visuals are identical and only audio changes.",
      "The renderer's audio callback is under 1 ms on an Apple M3 Pro for the Fountain scene, below the 5.3 ms duration of a 256-sample buffer at 48 kHz. This demonstrates real-time rendering for that setup, not end-to-end real-time scene construction."
    ],
    "What is new": [
      "The paper defines Image2AVScene, introduces a paired real-world evaluation set and unifies 360-degree visual generation, open-vocabulary 3D sound grounding and differentiable ambisonics. It also demonstrates one-shot room-acoustic fitting and spatial source separation as extensions."
    ],
    "Limitations": [
      "The method infers sound from appearance, so content, loudness and source type can be wrong even when the rendering math is correct. SonoScene360 is small—68 clips from six scenes—and most experiments use first-order ambisonics. The propagation model targets mostly dry outdoor scenes and does not model full reverberation; moving sources are a documented failure case because the input is static. The best configuration also depends on proprietary reconstruction and language models."
    ]
  }
},
{
  "slug": "pixel2phys-governing-laws-visual-dynamics",
  "date": "2026-10-02",
  "publishedDate": "2026-02-23",
  "topic": "AI for science",
  "title": "Pixel2Phys: Distilling Governing Laws from Visual Dynamics",
  "authors": "Ruikun Li, Jun Yao, Yingfan Hua, Shixiang Tang, Biqing Qi, Bin Liu, Wanli Ouyang, Yan Lu",
  "venue": "CVPR 2026 · first public 23 Feb 2026",
  "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Li_Pixel2Phys_Distilling_Governing_Laws_from_Visual_Dynamics_CVPR_2026_paper.html",
  "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Pixel2Phys_Distilling_Governing_Laws_from_Visual_Dynamics_CVPR_2026_paper.pdf",
  "summary": "Pixel2Phys coordinates four agents to extract physical variables, fit symbolic laws, simulate them and iteratively repair failures.",
  "care": "It is a useful stress test for whether multimodal agents can turn pixels into falsifiable equations rather than just descriptions.",
  "readMinutes": 5,
  "visuals": {
    "hero": {
      "src": "./assets/images/pixel2phys-framework.jpg?v=20261002",
      "alt": "Original Pixel2Phys framework showing the Plan, Variable, Equation and Experiment agents, their iterative feedback loop, multi-granularity visual tools and symbolic-regression stage.",
      "caption": "Figure 2 — Pixel2Phys's four-agent collaboration and visual-to-equation workflow. Original figure by Li et al. (CVPR 2026).",
      "creditUrl": "https://arxiv.org/html/2602.19516v1#S4.F2"
    }
  },
  "sections": {
    "TL;DR": [
      "Pixel2Phys wraps an MLLM in an iterative scientific workflow: extract variables from video, discover a sparse symbolic equation, simulate it, diagnose errors and refine either the variables or the equation. It handles object trajectories, pixel-level fields and low-dimensional dynamics in noisy scientific videos."
    ],
    "Why I might care": [
      "The queue's VLM and visual-reasoning papers repeatedly separate perception from reasoning. Pixel2Phys makes that separation executable: a wrong equation can send feedback to the visual representation. My proposed test: corrupt tracking, illumination and frame rate independently, then audit whether the planner revises the variable extractor or merely changes the symbolic library. This is my proposal, not a reported experiment."
    ],
    "Why it matters": [
      "Video prediction can look plausible while drifting away from the underlying dynamics. Compact equations are inspectable and can be integrated far beyond the observed window, but only if the system extracts the right physical variables first."
    ],
    "Main idea": [
      "Break the circular dependency between representation learning and law discovery with feedback. Preliminary laws constrain representation learning, while simulation and equation diagnostics tell the planner whether to change the variables, candidate operators or sparsity threshold."
    ],
    "Method": [
      "A Plan Agent coordinates Variable, Equation and Experiment agents. The Variable Agent uses SAM-based centroid tracking for objects, fixed derivative kernels for pixel fields, or a reconstruction-plus-physics-consistency autoencoder for complex phenomena. The Equation Agent builds polynomial and transcendental operator libraries and fits sparse coefficients with sequential thresholded least squares. The Experiment Agent checks derivative fit, term count, phase portraits and long-horizon numerical rollouts; GPT-4o is the default MLLM backbone."
    ],
    "Experiments": [
      "For five simulated object-motion systems, models train or fit on 200 steps and are evaluated on 1,000-step coordinate extrapolation over five seeds. Pixel2Phys reports R-squared 0.9913 on Linear, 0.9886 on Cubic, 1.0000 on Circular, 0.9954 on Van der Pol and 0.9995 on Glider. Coord-Equ reaches 0.8647, 0.2632, 0.9903, 0.4920 and 0.9129; Pixel2Phys does not recover an exact Glider term set despite its high rollout score.",
      "On four numerically generated reaction-diffusion systems, Table 2 evaluates 1,000-step rollouts—200 for Swift-Hohenberg—with RMSE and valid prediction steps at error threshold 0.5. Pixel2Phys reports RMSE/VPS of 0.03/1000 for Lambda-Omega, 0.12/1000 for Brusselator, 0.16/1000 for FitzHugh-Nagumo and 0.18/200 for Swift-Hohenberg. PDE-Find reports 0.67/492, 1.56/40, 0.63/54 and 0.19/200; several SGA-PDE and LLM-PDE runs are NaN.",
      "For four Karman-vortex and two Belousov-Zhabotinsky videos shorter than 300 frames, the models reconstruct the training sequence from its first frame. Pixel2Phys is compared with FNO, Latent-ODE and frozen Wan2.2 using RMSE and vorticity error. The paper reports the lowest errors in its plots, while noting that the output is less textured because the learned representation filters lighting and other visually irrelevant variation."
    ],
    "What is new": [
      "Instead of a fixed video-to-equation pipeline, Pixel2Phys makes equation quality part of the feedback that reshapes visual variables. One agent protocol spans discrete objects, continuous fields and latent dynamics while returning explicit symbolic laws."
    ],
    "Limitations": [
      "Most quantitative equation-recovery benchmarks are synthetic and use known families of compact dynamics. The real-video set has only six short sequences and is evaluated by reconstruction rather than held-out future data. Results depend on handcrafted tool choices, numerical derivatives, operator libraries and a strong proprietary MLLM. High rollout fidelity need not mean exact law recovery, as the Glider case shows, and the paper does not establish robustness to arbitrary camera motion, occlusion or stochastic dynamics."
    ]
  }
},
{
  "slug": "event-structural-valley-autofocus",
  "date": "2026-10-02",
  "publishedDate": "2026-06-01",
  "topic": "Event-camera autofocus",
  "title": "Event Structural Valley: A Unified Theoretical and Practical Framework for Event Camera Autofocus",
  "authors": "Xijie Xiang, Lin Zhu, Wei Zhang, Yonghong Tian",
  "venue": "CVPR 2026 · first public in 2026 proceedings",
  "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Xiang_Event_Structural_Valley_A_Unified_Theoretical_and_Practical_Framework_for_CVPR_2026_paper.html",
  "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Xiang_Event_Structural_Valley_A_Unified_Theoretical_and_Practical_Framework_for_CVPR_2026_paper.pdf",
  "summary": "ESVA models event autofocus as finding the valley between two event-rate peaks, not maximizing event count.",
  "care": "It is a clean example of sensor physics overturning a widely used proxy objective and producing a simpler, faster estimator.",
  "readMinutes": 5,
  "visuals": {
    "hero": {
      "src": "./assets/images/event-structural-valley-figure2.jpg?v=20261002",
      "alt": "Original Figure 2 shows an event stream during a one-way focus sweep, the resulting M-shaped event-rate curve with two peaks around a valley at true focus, and representative event maps across blur levels.",
      "caption": "Figure 2 — Structural characterization of the dual-peak event-rate curve and its valley at best focus. Original figure by Xiang et al. (CVPR 2026), cropped from the official paper.",
      "creditUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Xiang_Event_Structural_Valley_A_Unified_Theoretical_and_Practical_Framework_for_CVPR_2026_paper.pdf#page=3"
    }
  },
  "sections": {
    "TL;DR": [
      "During a one-way focal sweep, event activity rises as slight blur spreads contrast changes across more pixels, then falls under severe blur. The resulting two peaks surround a local minimum at best focus. ESVA regularizes the event-rate curve and localizes that physically constrained valley without reconstructing frames or training a model."
    ],
    "Why I might care": [
      "The queue includes event-based place recognition and geolocation, where focus quality can determine whether sparse edges remain usable under motion and low light. My proposed test: run ESVA before an event-VPR pipeline and stratify retrieval by illumination, sweep speed and depth layering. This downstream retrieval test is my proposal; the authors evaluate autofocus error."
    ],
    "Why it matters": [
      "Maximum-event-rate autofocus can stop on a slightly defocused peak. A physics-based valley criterion is especially useful where frames fail—fast motion, low light and high dynamic range—and avoids the cost and artifacts of image reconstruction."
    ],
    "Main idea": [
      "Model how defocus changes the number of pixels whose log-intensity variation crosses the event threshold. For an isolated structure the activation measure rises and then falls with blur; crossing focus in one direction therefore produces a dual-peak curve whose inter-peak minimum is the focal position."
    ],
    "Method": [
      "ESVA counts events in fixed temporal windows over a focus sweep, applies Gaussian structural smoothing, suppresses inconsistent local jumps, detects two dominant peaks with separation and prominence constraints, and minimizes the regularized rate only inside their interval. A confidence score compares the two peak heights with the valley. The operations are one-dimensional and scale linearly with focus samples."
    ],
    "Experiments": [
      "On the physics-based SYN benchmark with Static, Small Shake and Huge Shake motions, average focus-timestamp error is 6.62 ms for ESVA, versus 36.10 for ER+EGS, 27.24 for OLE'23, 17.74 for PBF and 8.68 for ELP. Lower is better; all methods use the same simulated focal sweeps and annotated focus timestamps.",
      "On real DAVIS sequences spanning bright/dark and static/motion conditions, ESVA averages 1.30 ms, versus 26.20, 7.51, 4.94 and 2.04 ms for the same baselines. On the higher-resolution EVK4 set, ESVA averages 4.22 ms, versus 17.26, 9.90, 9.74 and 5.33 ms. These are temporal errors during motorized sweeps, not image-sharpness scores.",
      "On the EAD extreme-illumination/motion benchmark, the paper reports mean focusing-distance error 65.38 micrometers and a 30% improvement over the next method. CPU runtime per DAVIS sequence is 1.43 ms and per EVK4 sequence 1.68 ms on an Intel i9 at 3.8 GHz; ER+EGS takes 62.00 and 417.22 ms. Ablations show that removing smoothing, consistency filtering or the dual-peak constraint produces large errors or false valleys."
    ],
    "What is new": [
      "The paper replaces the maximum-event-rate assumption with a derived rise-peak-fall model and a valley-localization algorithm. The same structure provides an interpretable confidence signal and works across synthetic and two event-camera resolutions without supervision."
    ],
    "Limitations": [
      "The formulation assumes one dominant depth layer governs the focus objective during a one-way sweep. With multiple competing depths, the rate curve can have more structure than one clean dual-peak valley. The authors also note that complementary polarity, intensity or spatial priors and additional task-specific constraints may be needed in more complex scenes. Reported accuracy depends on a controlled motorized focus sweep and does not establish closed-loop behavior on every lens or downstream vision task."
    ]
  }
},
{
  "slug": "groundingme-visual-grounding-gap",
  "date": "2026-10-01",
  "publishedDate": "2025-12-19",
  "topic": "Visual grounding",
  "title": "GroundingME: Exposing the Visual Grounding Gap in MLLMs through Multi-Dimensional Evaluation",
  "authors": "Rang Li, Lei Li, Shuhuai Ren, Hao Tian, Shuhao Gu, Shicheng Li, Zihao Yue, Yudong Wang, Wenhan Ma, Zhe Yang, Jingyuan Ma, Zhifang Sui, Fuli Luo",
  "venue": "CVPR 2026 · first public 19 Dec 2025",
  "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Li_GroundingME_Exposing_the_Visual_Grounding_Gap_in_MLLMs_through_Multi-Dimensional_CVPR_2026_paper.html",
  "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_GroundingME_Exposing_the_Visual_Grounding_Gap_in_MLLMs_through_Multi-Dimensional_CVPR_2026_paper.pdf",
  "summary": "GroundingME tests whether MLLMs can localize fine-grained targets, resolve spatial references, handle limited visibility and reject descriptions that match nothing.",
  "care": "For geolocation and bias auditing, add region-level rejection tests so a model must show what evidence it used—or say that the evidence is absent.",
  "readMinutes": 5,
  "visuals": {
    "hero": {
      "src": "./images/groundingme-figure1.jpg",
      "alt": "Original Figure 1 contrasts simple prior grounding benchmarks with GroundingME examples for discriminative, spatial, limited-visibility and rejection challenges; green boxes are ground truth and red boxes are Qwen3-VL-30B predictions.",
      "caption": "Figure 1 — Prior grounding examples and GroundingME’s four challenge dimensions. Original figure by Li et al. (CVPR 2026); green is ground truth and red is the Qwen3-VL-30B-A3B-Instruct prediction.",
      "creditUrl": "https://arxiv.org/html/2512.17495v2#S1.F1"
    }
  },
  "sections": {
    "TL;DR": [
      "GroundingME is a 1,005-example diagnostic benchmark for visual grounding in cluttered, high-resolution scenes. It separates fine-grained discrimination, spatial reasoning, limited visibility and rejection of an ungroundable description; the strongest no-thinking result is 45.1% Accuracy@0.5, and rejection is the dominant failure mode."
    ],
    "Why I might care": [
      "The queue’s geolocation, foreground-bias and wildlife themes all depend on whether a model attends to the right region rather than a convenient correlate. My proposed test: turn GeoBiaset-style people/background interventions into grounding-and-rejection queries, then measure whether demographic foreground cues move the selected region or suppress a correct null answer. This is a PaperCut proposal; the authors do not test geolocation or fairness."
    ],
    "Why it matters": [
      "High scores on short referring expressions can hide keyword shortcuts. Real use requires separating similar instances, following multi-object relations, finding tiny or occluded targets and refusing a subtly false description instead of returning a plausible box."
    ],
    "Main idea": [
      "Replace one aggregate grounding score with a two-level taxonomy: four broad capabilities and twelve fine-grained subcategories. The same output format—one bounding box or null—makes localization and calibrated rejection part of one evaluation."
    ],
    "Method": [
      "Images come from raw SA-1B and HR-Bench data. For SA-1B, RAM++ proposes class names and GroundingDINO produces boxes; HR-Bench boxes are annotated manually. Gemini-2.5-Flash drafts descriptions, then humans filter and edit boxes and expressions for uniqueness, factual accuracy and task specificity. Classes with fewer than three instances and boxes covering more than half the image are removed. The final set has 204 Discriminative, 300 Spatial, 300 Limited and 201 Rejection samples; pairwise Cohen’s kappa on 50 audited samples is 0.64–0.73 (mean 0.69)."
    ],
    "Experiments": [
      "Twenty-five commercial and open MLLMs are evaluated with greedy decoding and Accuracy@0.5, meaning the predicted box must exceed 0.5 IoU with ground truth. In the no-thinking table, Qwen3-VL-235B-A22B reaches 45.1% overall; most models score 0% on Rejection. The paper demonstrates a large gap on this benchmark, not a universal ordering of all grounding systems.",
      "With thinking enabled, Qwen3-VL-A22B reaches 49.8% overall and 5.5% on Rejection. The authors’ best-of-N test-time scaling uses a judge to select among reasoning traces and improves overall accuracy by up to 4.5 points.",
      "For training-time rejection, Qwen3-VL-8B is fine-tuned on RefCOCOg positives mixed with generated negatives. At a 2:1 negative-to-positive ratio, Rejection reaches 27.9%, but total accuracy is 26.0% (40.2 Discriminative, 24.0 Spatial, 17.0 Limited), showing a real trade-off rather than a free improvement."
    ],
    "What is new": [
      "The benchmark unifies compositional descriptions, multiple failure dimensions and explicit rejection in realistic high-resolution imagery. It also reports both inference-time selection and data-mixture training as targeted interventions rather than treating scale alone as the solution."
    ],
    "Limitations": [
      "The set is small (1,005 examples) and draws images from only SA-1B and HR-Bench. Descriptions start from a model-generated draft before human refinement, and the 50-sample agreement audit is limited. Coordinate-format sensitivity affects comparability: Gemini uses a different coordinate order, while GPT-5, Claude-Sonnet-4.5 and Grok-4 are omitted because their coordinates were unusable. The benchmark diagnoses localization and rejection; it does not establish downstream safety or fairness."
    ]
  }
},
{
  "slug": "visres-bench-visual-reasoning",
  "date": "2026-10-01",
  "publishedDate": "2025-12-24",
  "topic": "Visual reasoning",
  "title": "VisRes Bench: On Evaluating the Visual Reasoning Capabilities of VLMs",
  "authors": "Brigitta Malagurski Törtei, Yasser Dahou, Ngoc Dung Huynh, Wamiq Reyaz Para, Phúc H. Lê Khac, Ankit Singh, Sofian Chaybouti, Sanath Narayan",
  "venue": "CVPR 2026 · first public 24 Dec 2025",
  "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Tortei_VisRes_Bench_On_Evaluating_the_Visual_Reasoning_Capabilities_of_VLMs_CVPR_2026_paper.html",
  "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Tortei_VisRes_Bench_On_Evaluating_the_Visual_Reasoning_Capabilities_of_VLMs_CVPR_2026_paper.pdf",
  "summary": "VisRes Bench separates low-level completion, single-attribute rule inference and multi-attribute composition using 19,000 image-only four-choice tasks.",
  "care": "It offers a clean way to test whether geolocation and grounding models reason over visual relations or merely exploit textual and dataset priors.",
  "readMinutes": 5,
  "visuals": {
    "hero": {
      "src": "./images/visres-bench-figure1.jpg",
      "alt": "Original Figure 1 shows real VisRes samples: local visual completion at Level 1 and Raven-style single- and multi-attribute reasoning grids at Levels 2 and 3.",
      "caption": "Figure 1 — Real samples from VisRes Levels 1–3, moving from perceptual completion to single- and multi-attribute rules. Original figure by Törtei et al. (CVPR 2026).",
      "creditUrl": "https://arxiv.org/html/2512.21194v1#S1.F1"
    }
  },
  "sections": {
    "TL;DR": [
      "VisRes Bench asks VLMs to solve image-only, four-choice tasks across a perceptual-to-compositional hierarchy. Models can be strong on visually obvious color rules yet remain near the 25% chance level on fine-grained completion, orientation and coupled attributes."
    ],
    "Why I might care": [
      "The queue repeatedly asks whether VLMs use genuine visual evidence in geolocation, grounding and camera-trap recognition. My proposed test: build matched visual-only relation puzzles from landmark or camera-trap frames, then compare a VLM’s raw visual answer with a version where the relevant attributes are verbalized. A large gap would isolate perception from symbolic rule use. This is my proposal, not an experiment in the paper."
    ],
    "Why it matters": [
      "A model can answer a reasoning question from textual scaffolding without reliably extracting the underlying orientation, count or spatial continuation. VisRes makes that dependency visible by controlling what changes and withholding contextual language."
    ],
    "Main idea": [
      "Organize visual reasoning as three dependent levels: Level 1 completes local patches or globally occluded scenes; Level 2 infers a rule over one attribute; Level 3 composes coupled, independent or spiral rules over several attributes. Errors can then be traced to perception, abstraction or composition."
    ],
    "Method": [
      "The 19,000 tasks use real images and four visual choices. Level 1 uses 80×80 masked patches in 512×512 composites, DINOv2-similar distractors, blur, brightness, rotation, edges and 50%/80% global occlusion. Level 2 contains 5,956 Raven-style 3×3 grids across 12 color, count and orientation rules; Level 3 contains 2,522 grids across six multi-attribute rules. Count labels combine crawl metadata with Molmo verification, color uses GPT-5 verification, and 10,000 orientation labels are manual."
    ],
    "Experiments": [
      "The main table uses guided prompts, thinking mode where available and accuracy on four-choice tasks (25% chance). GPT-5 averages 31.10% on Level 1, 49.79% on Level 2 and 34.39% on Level 3. Within Level 2 it scores 96.00% on Uniform Color but 22.22% on Uniform Orientation, showing that one aggregate score would hide a large attribute gap.",
      "A Level-1 human study with five participants and 200 tasks per person reports 90.4% average accuracy. Under the same Level-1 subtask aggregation, Qwen2.5-VL-3B moves from 24.5% to 43.7% after fine-tuning on 100,000 examples per subtask, still far below the reported human baseline.",
      "Reasoning effort mainly helps structured tasks: GPT-5 moves from 47.01% to 49.79% on Level 2 and from 32.89% to 34.39% on Level 3, while Level 1 changes from 31.43% to 31.11%. The paper interprets this pattern as evidence that extra reasoning does not repair weak visual extraction."
    ],
    "What is new": [
      "VisRes connects natural-image perceptual completion and Raven-style rule inference in one level-structured benchmark, with controlled single- versus multi-attribute tasks and explicit tests of prompts, reasoning effort, resolution and fine-tuning."
    ],
    "Limitations": [
      "The benchmark is fixed-choice, so it does not measure open-ended reasoning or action. Levels 2–3 rely on crawled imagery and semi-automated labels; only orientation is manually labeled at scale, while the count audit covers 100 images. Distractors and repeated source images can introduce benchmark-specific regularities. The human baseline is small and limited to Level 1, and results vary materially with prompt, resolution and reasoning settings."
    ]
  }
},
{
  "slug": "real-wild-vlm-camera-trap-videos",
  "date": "2026-10-01",
  "publishedDate": "2026-06-01",
  "topic": "Wildlife monitoring",
  "title": "Real-Wild-VLM: Prompting Large Vision-Language Models for Wildlife Recognition in Camera-Trap Videos",
  "authors": "Yutong Deng, Qi Song, Lei Bao, Jianping Ge",
  "venue": "CVPR 2026 DataCV Workshop · first public in 2026 proceedings",
  "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026W/DataCV/html/Deng_Real-Wild-VLM_Prompting_Large_Vision-Language_Models_for_Wildlife_Recognition_in_Camera-Trap_CVPRW_2026_paper.html",
  "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026W/DataCV/papers/Deng_Real-Wild-VLM_Prompting_Large_Vision-Language_Models_for_Wildlife_Recognition_in_Camera-Trap_CVPRW_2026_paper.pdf",
  "summary": "Real-Wild-VLM evaluates zero-shot wildlife recognition in empty-heavy infrared camera-trap videos and shows that explicit rejection instructions sharply reduce false positives.",
  "care": "This is a direct operational test for wildlife monitoring: prompt design changes empty-scene rejection enough to alter the review burden and ecological counts.",
  "readMinutes": 4,
  "visuals": {
    "hero": {
      "src": "./images/real-wild-vlm-figure1.jpg",
      "alt": "Original Figure 1 shows high-visibility daytime wildlife, an animal partly outside the frame, and low-contrast infrared camera-trap examples.",
      "caption": "Figure 1 — Typical real-world camera-trap challenges: high visibility, out-of-frame animals and infrared modality. Original figure by Deng et al. (CVPR 2026 DataCV Workshop), cropped from the official paper.",
      "creditUrl": "https://openaccess.thecvf.com/content/CVPR2026W/DataCV/papers/Deng_Real-Wild-VLM_Prompting_Large_Vision-Language_Models_for_Wildlife_Recognition_in_Camera-Trap_CVPRW_2026_paper.pdf#page=2"
    }
  },
  "sections": {
    "TL;DR": [
      "On 2,457 camera-trap clips, standard closed-set prompts make open VLMs predict an animal even when the clip is empty. Adding an explicit EMPTY decision improves six of eight model variants; morphology-guided prompts help some larger models but can hurt medium-scale ones."
    ],
    "Why I might care": [
      "This directly matches the queue’s camera-trap and long-term wildlife-monitoring themes. False positives on empty clips inflate manual review and can distort occupancy estimates. My proposed test: calibrate the EMPTY rule by habitat, infrared/daylight condition and target prevalence, then compare both clip accuracy and downstream occupancy estimates. The authors report recognition metrics, not ecological population estimates."
    ],
    "Why it matters": [
      "Real deployments are dominated by empty or near-empty clips, with brief, occluded and low-contrast animals. A model that looks competent on visible species but rarely abstains can be unusable at field scale."
    ],
    "Main idea": [
      "Treat empty-scene rejection as part of the recognition task, not an afterthought. Prompt the model with an explicit decision rule, then add morphology and silhouette cues for species that are easily confused in infrared footage."
    ],
    "Method": [
      "Wild-VLM contains 2,457 video clips from Northeast China Tiger and Leopard National Park, covering 20 species and nine capture conditions. Each clip is sampled uniformly to 10 frames and resized so the shorter side is 768 pixels. Eight variants from InternVL2.5, LLaVA-OneVision and Qwen2.5-VL are tested zero-shot with a fixed label set under three prompts: a conventional closed-set baseline, an explicit EMPTY-rejection prompt and a morphology-guided prompt with species cues. Outputs are parsed into one label plus confidence."
    ],
    "Experiments": [
      "Under the baseline prompt, every tested variant has EMPTY accuracy at or below 4.27%, despite the benchmark’s heavy empty-class imbalance. Adding the explicit EMPTY rule improves overall accuracy for six of eight variants; the largest gain is InternVL2.5-8B, from 54.14% to 67.52% overall (+13.38 points), while its EMPTY accuracy rises from 0.93% to 59.55%.",
      "Morphology guidance is capacity-sensitive. Qwen2.5-VL-72B moves from 62.84% to 72.56% overall (+9.72 points), with non-empty accuracy 71.86%, high-confidence accuracy 75.28% and EMPTY accuracy 28.79%. In contrast, the same prompt lowers InternVL2.5-26B by 6.38 points and Qwen2.5-VL-32B by 2.69 points. These are prompt effects on this fixed benchmark, not evidence that morphology instructions always help."
    ],
    "What is new": [
      "The paper centers empty-heavy, infrared video conditions and compares rejection-aware prompting across several open VLM families. It shows a practical interaction between abstention rules, domain cues and model capacity without retraining."
    ],
    "Limitations": [
      "The benchmark comes from one protected area and a fixed 20-species label set, so ecological and geographic transfer is untested. The study uses only open models, fixed ten-frame sampling and prompt-engineered zero-shot classification; it does not compare trained camera-trap specialists, probability calibration or temporal localization. Prompt gains are inconsistent across model sizes, and clip-level accuracy does not by itself validate abundance or occupancy estimates."
    ]
  }
},
{
  "slug": "internal-guidance-diffusion-transformers",
  "date": "2026-09-30",
  "publishedDate": "2025-12-30",
  "topic": "Diffusion guidance",
  "title": "Guiding a Diffusion Transformer with the Internal Dynamics of Itself",
  "authors": "Xingyu Zhou, Qifan Li, Xiaobin Hu, Hai Chen, Shuhang Gu",
  "venue": "CVPR 2026 · first public 30 Dec 2025",
  "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_Guiding_a_Diffusion_Transformer_with_the_Internal_Dynamics_of_Itself_CVPR_2026_paper.html",
  "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhou_Guiding_a_Diffusion_Transformer_with_the_Internal_Dynamics_of_Itself_CVPR_2026_paper.pdf",
  "summary": "Internal Guidance trains an intermediate denoising head, then extrapolates from its prediction toward the final prediction in the same transformer pass.",
  "care": "For latent video compression, test internal guidance in a generative refiner at fixed bitrate and compute. This is my proposed experiment, not a paper result.",
  "readMinutes": 4,
  "visuals": {
    "hero": {
      "src": "./images/internal-guidance-figure-2.png",
      "alt": "Original Figure 2 shows a diffusion transformer with intermediate and final output heads supervised by denoising losses, followed by the Internal Guidance sampling equation.",
      "caption": "Figure 2 — Internal Guidance training and sampling. Original figure by Zhou et al. (CVPR 2026), cropped from the official paper; the intermediate and final predictions share one backbone pass.",
      "creditUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhou_Guiding_a_Diffusion_Transformer_with_the_Internal_Dynamics_of_Itself_CVPR_2026_paper.pdf#page=3"
    }
  },
  "sections": {
    "TL;DR": [
      "Internal Guidance (IG) uses a diffusion transformer’s own intermediate prediction as its weaker guide. An auxiliary denoising head is trained alongside the final head; sampling extrapolates toward the final prediction without another backbone evaluation for IG alone."
    ],
    "Why I might care": [
      "The queue’s latent video compression theme also relies on generative refinement, where guidance can change both detail and fidelity. My proposed experiment: train an intermediate head in a video latent refiner, then compare IG with the unguided decoder at fixed bitrate, sampling steps and compute. Track perceptual quality, temporal consistency and downstream detection accuracy separately. The authors test image generation, not video compression or detection."
    ],
    "Why it matters": [
      "Guidance can improve generated images, but classifier-free guidance requires conditional and unconditional predictions, while guidance with a separate weaker model adds another model evaluation. IG obtains two predictions from different depths of one trained backbone."
    ],
    "Main idea": [
      "Treat the intermediate prediction as a less mature estimate of the same denoising target. Move beyond the final prediction along the difference between final and intermediate outputs, rather than constructing a degraded external model."
    ],
    "Method": [
      "Attach an output head at an intermediate block and optimize the final loss plus a weighted intermediate denoising loss. At sampling, combine predictions as D_i + w(D_f − D_i): w = 1 recovers the final prediction, while w > 1 extrapolates. Head placement and the noise interval where guidance is applied are tuned. IG can be combined with classifier-free guidance; that combination still requires its conditional/unconditional evaluations."
    ],
    "Experiments": [
      "Table 1 tests head placement on ImageNet-1K at 256×256 with SiT-B/2 trained for 80 epochs. With the auxiliary head at block 4, FID is 30.60 using the final output alone and 19.02 with IG at w = 1.5; the unmodified SiT-B/2 baseline scores 33.02. Lower FID is better. Evaluation uses 50,000 generated images with randomly sampled class labels and a 250-step Euler–Maruyama sampler.",
      "Table 5 reports LightningDiT-XL/1 + IG at 680 epochs: FID 1.34 without CFG and 1.19 with CFG and a guidance interval, versus 2.17 and 1.35 for LightningDiT at 800 epochs. These are comparisons between training recipes: the IG run also changes AdamW to Muon and the EMA coefficient, so the full gain cannot be attributed to IG alone. The supplementary class-balanced sampling results use a different protocol and should not be mixed with these numbers."
    ],
    "What is new": [
      "The same intermediate supervision supplies both a training signal and a sampling guide. The paper studies head depth, guidance strength and noise intervals, rather than requiring a separately trained or explicitly degraded guide."
    ],
    "Limitations": [
      "This needs an auxiliary head trained with the model; it is not a training-free switch for an arbitrary pretrained checkpoint. Later head placements can worsen results, and guidance settings matter. The evidence is mainly class-conditional ImageNet generation, including higher-resolution supplementary tests; it does not establish preservation of source details in compression or universal diversity benefits."
    ]
  }
},
{
  "slug": "gnvc-vd-video-diffusion-compression",
  "date": "2026-09-30",
  "publishedDate": "2025-12-04",
  "topic": "Generative video compression",
  "title": "Generative Neural Video Compression via Video Diffusion Prior",
  "authors": "Qi Mao, Hao Cheng, Tinghan Yang, Libiao Jin, Siwei Ma",
  "venue": "CVPR 2026 · first public 4 Dec 2025",
  "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Mao_Generative_Neural_Video_Compression_via_Video_Diffusion_Prior_CVPR_2026_paper.html",
  "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Mao_Generative_Neural_Video_Compression_via_Video_Diffusion_Prior_CVPR_2026_paper.pdf",
  "summary": "GNVC-VD entropy-codes spatiotemporal video latents, then jointly refines them with a frozen video diffusion prior and learned conditioning adapters.",
  "care": "For latent video compression, test whether perceptual gains preserve detection and identity at fixed bitrate. This is my proposed test, not an author result.",
  "readMinutes": 4,
  "visuals": {
    "hero": {
      "src": "./images/gnvc-vd-figure-3.png",
      "alt": "Original Figure 3 shows the GNVC-VD video encoder, contextual latent codec and bitstream, noise addition, VideoDiT refinement, 3D VAE decoder, and the codec and adapter internals.",
      "caption": "Figure 3 — GNVC-VD pipeline, contextual latent coding and flow-matching refinement. Original figure by Mao et al. (CVPR 2026), cropped from the official paper.",
      "creditUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Mao_Generative_Neural_Video_Compression_via_Video_Diffusion_Prior_CVPR_2026_paper.pdf#page=4"
    }
  },
  "sections": {
    "TL;DR": [
      "GNVC-VD compresses a video’s spatiotemporal latents and uses a pretrained video diffusion model to refine the decoded sequence jointly. It targets perceptual quality at very low bitrates, with substantial decoding cost."
    ],
    "Why I might care": [
      "This directly matches the queue’s latent video compression theme: it separates the transmitted representation from a foundation model’s reconstruction prior. My proposed test is to compare the refined and unrefined reconstructions at the same bitrate on object detection and identity consistency, alongside LPIPS and temporal metrics. Does plausible detail help the downstream task, or change its evidence? The authors evaluate perceptual quality and temporal coherence, not downstream detector accuracy."
    ],
    "Why it matters": [
      "An image-based generative prior can restore convincing textures frame by frame while making them drift over time. A video prior can coordinate refinement across the sequence, but perceptual similarity and exact source fidelity remain different objectives."
    ],
    "Main idea": [
      "Code a compact sequence with temporal context, then correct compression degradation in the video model’s own latent space. Refine the sequence together instead of independently enhancing each decoded frame."
    ],
    "Method": [
      "A causal 3D VAE from Wan2.1 maps video to spatiotemporal latents. The contextual latent codec entropy-codes an anchor latent and predicts later latents using reconstructed temporal context. Flow matching starts from partially noised decoded latents; learned adapters inject codec features into a frozen VideoDiT to correct quantization-induced mismatch. The 3D VAE decoder produces the video. Training first aligns latent coding and flow refinement, then adds pixel-level rate–distortion and perceptual objectives."
    ],
    "Experiments": [
      "Experiments cover HEVC Class B, UVG and MCL-JCV, using the first 96 frames and RGB evaluation in a low-delay prediction setup. The supplementary protocol splits GNVC-VD into GOPs of 25, 25, 25 and 21 frames; DCVC-FM/RT use a GOP of 96. Models are trained on Vimeo clips and use five refinement steps.",
      "Table 3 reports BD-rate relative to VVC, integrating rate–quality curves rather than comparing one operating point. On HEVC-B, GNVC-VD scores −89.4% for LPIPS-VGG and −94.5% for DISTS, versus −79.1% and −94.8% for GLC-Video. On UVG, it scores −86.5% and −96.1%, versus −60.0% and −10.3% for GLC-Video. Negative values mean less bitrate at equal measured perceptual quality; these are not PSNR gains or direct pairwise savings over GLC-Video.",
      "Temporal evaluations include CLIP-F, warp error and FVD. GNVC-VD improves the reported temporal measures over GLC-Video, but does not beat every traditional or neural codec on warp error. Supplementary operating points have different bitrates, so the headline temporal table is not a strictly matched-rate comparison."
    ],
    "What is new": [
      "The contribution is the coupling of a contextual spatiotemporal latent codec with sequence-level flow-matching refinement and codec-conditioned adapters inside a video diffusion prior. The prior is adapted to compression degradation rather than used as an independent frame enhancer."
    ],
    "Limitations": [
      "Perceptual metrics do not establish exact texture recovery or downstream task fidelity. Supplementary Table 3 reports 153 ms/frame encoding and 1557 ms/frame decoding at 1920×1080 on one A800; a 25-frame 1080p clip peaks at 71.41 GB memory in Table 4. Current models use fixed rates: preliminary unified variable-rate training was unstable. Long videos use chunks, and practical streaming would need causal attention and a rolling buffer. These constraints matter when comparing with real-time codecs."
    ]
  }
},
{
  "slug": "ssr-merge-subspace-signal-routing",
  "date": "2026-09-30",
  "publishedDate": "2026-06-09",
  "topic": "LoRA merging",
  "title": "SSR-Merge: Subspace Signal Routing for Training-Free LoRA Merging in Diffusion Models",
  "authors": "Zhengxuan Wei, Yi Dong, Zonghui Li, Xianhui Lin, Xing Liu, Hong Gu, Shaofeng Zhang, Wenbin Li, Qi Fan",
  "venue": "ICML 2026 · first public 9 Jun 2026",
  "sourceUrl": "https://icml.cc/virtual/2026/poster/62664",
  "pdfUrl": "https://arxiv.org/pdf/2606.10617v1",
  "summary": "SSR-Merge computes a linear router from calibration activations to reduce interference between diffusion LoRAs, then absorbs it into the merged weights.",
  "care": "For diffusion adaptation in latent video research, compare routing against summed adapters at fixed bitrate and compute. This is my proposed test, not an author result.",
  "readMinutes": 4,
  "visuals": {
    "hero": {
      "src": "./images/ssr-merge-figure-2.png",
      "alt": "Original Figure 2 shows task inputs entering stacked LoRA down-projections, an inverse-correlation decorrelation stage and directional steering matrix, then concatenated up-projections.",
      "caption": "Figure 2 — Subspace Signal Routing: concatenated LoRA projections with decorrelation and directional steering. Original figure by Wei et al. (ICML 2026), cropped from the authors’ arXiv manuscript.",
      "creditUrl": "https://arxiv.org/pdf/2606.10617v1#page=3"
    }
  },
  "sections": {
    "TL;DR": [
      "SSR-Merge combines already trained LoRAs by routing their internal low-rank signals. It computes a closed-form linear router from calibration activations and folds that router into the weights, avoiding gradient-based merge training and a dynamic inference gate."
    ],
    "Why I might care": [
      "The queue’s diffusion and latent video themes raise a practical adaptation question: can several specialized adapters coexist without one erasing another? My proposed experiment is to merge adapters trained for different content domains or compression settings, comparing SSR with a summed-adapter baseline at fixed bitrate and compute. Evaluate each domain separately and test mixed content for temporal consistency and detection accuracy. This extends the idea to video compression; the authors’ diffusion experiments concern image generation and editing."
    ],
    "Why it matters": [
      "Adding task-specific weight updates can dilute a subject’s identity or activate unrelated concepts. A merged model must preserve individual capabilities as well as compose several in one output; those are separate tests."
    ],
    "Main idea": [
      "Keep the candidate LoRA subspaces together, but replace blind signal addition with a statistics-derived linear map that decorrelates mixed activations and directs them toward the appropriate up-projections."
    ],
    "Method": [
      "Stack the down-projections A and concatenate the up-projections B, expanding rank from r to Kr for K adapters. For each task, obtain calibration features from a representative prompt and one diffusion timestep. Accumulate the projected correlation matrix G and directional cross-covariance Q, then form R = QG⁻¹. Statistics are streamed rather than caching all features. Absorb R into B for a standard linear LoRA or merge the update into backbone weights. “Training-free” refers to constructing the merge, not training the input adapters or eliminating calibration."
    ],
    "Experiments": [
      "Table 1 evaluates FLUX.1-dev with rank-32 LoRAs trained on ten selected DreamBooth subjects. At K = 9, each target adapter is merged with eight randomly selected distractors. Mean reference-image DINOv2 similarity is 0.6713 for SSR versus 0.6240 for IterIS; CLIP similarity is 0.7850 versus 0.7520. The standalone adapter scores 0.7443 and 0.8452. Higher is better, references are averaged, and methods share initial noise seeds.",
      "The composition test uses 100 prompts requesting two, three or four subjects from that pool. Table 3 gives SSR a 91% success rate versus 62% for DARE and 76% for Task Arithmetic. Success means Grounding DINO detects every requested subject; missing subjects receive zero similarity. This detector-based criterion is not a human assessment of exact identity.",
      "The paper also tests simultaneous facial edits on FFHQ and reports additional Qwen-Image and GLUE results in its appendices. These extend the tested settings without establishing performance on video models or arbitrary adapter collections."
    ],
    "What is new": [
      "SSR makes the merge a closed-form routing problem in the concatenated LoRA subspace, with streaming sufficient statistics and linear reparameterization. The authors connect the router to a local least-squares reconstruction objective."
    ],
    "Limitations": [
      "The local linear optimality claim does not guarantee optimal outputs through the full nonlinear diffusion process. The authors identify severe domain conflicts and overlapping concepts as difficult cases. Covariance inversion relies on adequate, well-conditioned calibration statistics; the finite-sample bound assumes this explicitly. The merged adapter has rank Kr unless absorbed into dense weights, so it does not retain one adapter’s original rank budget. The main subject benchmark contains a curated pool of ten concepts."
    ]
  }
},
  {
    "slug": "transform-to-transfer-vlp-attacks",
    "date": "2026-09-29",
    "publishedDate": "2026-06",
    "topic": "Adversarial attacks",
    "title": "Transform to Transfer: Boosting Adversarial Attack Transferability on Vision-Language Pre-training Models",
    "authors": "Yang Li, Jia-Li Yin, Luojun Lin, Wei Lin",
    "venue": "CVPR 2026 · first public June 2026",
    "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Li_Transform_to_Transfer_Boosting_Adversarial_Attack_Transferability_on_Vision-Language_Pre-training_CVPR_2026_paper.html",
    "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Transform_to_Transfer_Boosting_Adversarial_Attack_Transferability_on_Vision-Language_Pre-training_CVPR_2026_paper.pdf",
    "summary": "TTA combines learned block-wise image transformations with boosted integrated gradients to make image-and-text attacks transfer across VLP models.",
    "care": "For RoadTrip Attack and GeoCLIP, test whether TTA-style transformation sampling improves transfer to other geolocalizers. This is my proposal, not an author result.",
    "readMinutes": 5,
    "visuals": {
      "hero": {
        "src": "./images/tta-figure-1.png",
        "alt": "Original Figure 1 contrasts SGA and LSSA scaling and shuffle, DRA sampling, and TTA transformations, with transfer attack success bar charts for three target VLP models.",
        "caption": "Figure 1 from Li et al., “Transform to Transfer” (CVPR 2026); cropped from the official paper.",
        "creditUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Transform_to_Transfer_Boosting_Adversarial_Attack_Transferability_on_Vision-Language_Pre-training_CVPR_2026_paper.pdf#page=1"
      }
    },
    "sections": {
      "TL;DR": [
        "Transform to Transfer Attack (TTA) makes multimodal adversarial examples more transferable by learning which block-wise image transformations to sample and averaging gradients over transformed interpolation paths."
      ],
      "Why I might care": [
        "RoadTrip Attack tests transfer from GeoCLIP to other geolocalizers; TTA addresses the same source-model overfitting problem in image–text retrieval. My proposed experiment is to add TTA-style transformation sampling to a GeoCLIP surrogate attack and measure target-location error on Img2Loc and G3 at a fixed pixel budget and query cost. The authors do not test geolocation."
      ],
      "Why it matters": [
        "A perturbation that breaks one vision-language model may fail on another architecture. The paper studies transfer under a black-box target setting, where gradients come only from a source model."
      ],
      "Main idea": [
        "Diversify the images seen during attack optimization and use a transformed version of integrated gradients to reduce reliance on a single source-model gradient path."
      ],
      "Method": [
        "TTA samples image scales, then learns probability distributions over block partitions and within-block transformation sequences. Its boosted integrated gradient uses one interpolation point for each transformed path instead of many nearby points on one path. Text perturbations use BERT-Attack-style word substitution in GloVe space. The reported setup uses an 8/255 image budget, ten update steps, and one word substitution."
      ],
      "Experiments": [
        "On Flickr30K image–text retrieval, attacks crafted on ALBEF and transferred to CLIP ViT-B/16 achieve 92.27% text-retrieval R@1 attack success with TTA versus 53.25% with LSSA; image-retrieval R@1 attack success is 92.82% versus 60.89%. The targets are black-box to the attack and the image perturbation budget is 8/255. Table 1 also tests TCL and CLIP with a ResNet-101 image encoder.",
        "For a separate cross-task transfer, ALBEF retrieval attacks generated on MSCOCO reduce BLIP captioning CIDEr from 133.3 on clean inputs to 28.5, versus 63.4 with LSSA; lower caption scores indicate a stronger attack here. The paper also reports ALBEF visual-grounding transfer on RefCOCO+."
      ],
      "What is new": [
        "The learned distribution over block-level transformation combinations and the boosted integrated-gradient sampling scheme are combined in one multimodal transfer attack. Ablations remove each component separately."
      ],
      "Limitations": [
        "The tested targets are ALBEF, TCL and two CLIP encoder variants, with Flickr30K as the main retrieval benchmark; this does not establish transfer to arbitrary VLMs or geolocalizers. More transformed samples consume more attack computation: Table 3 reports 28.44 seconds for TTA with 20 augmented images versus 27.33 seconds for LSSA under its measured setup. The paper does not evaluate defenses."
      ]
    }
  },
  {
    "slug": "debiaslens-vlm-social-fairness",
    "date": "2026-09-29",
    "publishedDate": "2026-02-27",
    "topic": "Vision-language bias",
    "title": "Interpretable Debiasing of Vision-Language Models for Social Fairness",
    "authors": "Na Min An, Yoonna Jang, Yusuke Hirota, Ryo Hachiuma, Isabelle Augenstein, Hyunjung Shim",
    "venue": "CVPR 2026 · first public 27 Feb 2026",
    "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/An_Interpretable_Debiasing_of_Vision-Language_Models_for_Social_Fairness_CVPR_2026_paper.html",
    "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/An_Interpretable_Debiasing_of_Vision-Language_Models_for_Social_Fairness_CVPR_2026_paper.pdf",
    "summary": "DeBiasLens uses sparse autoencoders to find demographic-responsive features in VLM encoders, then attenuates selected features at inference.",
    "care": "For GeoBiaset, probe whether foreground demographic cues correlate with location errors, then test targeted SAE intervention. This is my proposed test, not a paper result.",
    "readMinutes": 5,
    "visuals": {
      "hero": {
        "src": "./images/debiaslens-figure-1.jpg",
        "alt": "Original Figure 1 shows different faces retrieved for a CEO prompt before and after DeBiasLens, and an ambiguous visual question with answer distributions before and after intervention.",
        "caption": "Figure 1 from An et al., “Interpretable Debiasing of Vision-Language Models for Social Fairness” (CVPR 2026); cropped from the official paper.",
        "creditUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/An_Interpretable_Debiasing_of_Vision-Language_Models_for_Social_Fairness_CVPR_2026_paper.pdf#page=1"
      }
    },
    "sections": {
      "TL;DR": [
        "DeBiasLens trains sparse autoencoders on frozen vision-language features, identifies demographic-responsive latent units, and reduces their contribution at inference to lower measured social bias."
      ],
      "Why I might care": [
        "GeoBiaset asks how people and foreground content can skew a geolocalizer. My proposed test is to fit an SAE to a geolocation encoder, probe which features respond to demographic foreground cues, and compare localization errors before and after a targeted intervention across geographic groups. This paper tests social bias in retrieval and VQA, not geolocation or GeoBiaset."
      ],
      "Why it matters": [
        "Bias can enter through either image or text features, while broad retraining may disturb useful representations. A localized intervention offers a way to inspect which features correlate with measured bias and to control the utility trade-off."
      ],
      "Main idea": [
        "Use a sparse autoencoder as a lens on the encoder. Find latent units that activate frequently for one demographic group and less often for others, then attenuate their activations when encoding new inputs."
      ],
      "Method": [
        "The authors train top-k sparse autoencoders on image or text encoder activations, using facial images or captions without demographic labels for SAE training. Group labels are then required to probe and select social units: activation frequency and group specificity identify candidates, and the strongest units are chosen. At inference, a weighted combination of original and SAE-modulated activations replaces the encoder representation. The intervention can be applied to CLIP or to encoders inside LLaVA and InternVL."
      ],
      "Experiments": [
        "For CLIP ViT-B/16 on FairFace text-to-image retrieval, Max Skew@1000 is reported after multiplying by 100; lower means a retrieved demographic distribution closer to uniform. On occupation prompts, text-side DeBiasLens scores 16.2 versus 33.5 for the reproduced CLIP baseline, while Bend-VLM scores 10.2. On stereotype prompts, it scores 8.1 versus 32.5 for CLIP and 9.1 for Bend-VLM. Thus it improves these measures over CLIP but is not best on every prompt type.",
        "The paper also tests VQA on VLAGenderBias and SBBench. Its intervention-strength ablation shows a real trade-off: for CLIP ViT-B/16, changing the text-side weight from 0 to 0.6 changes ImageNette accuracy from 99.1% to 98.5% and FairFace Max Skew from 16.7 to 7.1 under the paper’s setup."
      ],
      "What is new": [
        "The paper connects sparse-autoencoder feature inspection to a targeted inference-time debiasing intervention across image and text encoders, and tests neuron specificity rather than relying only on final outputs."
      ],
      "Limitations": [
        "SAE training is label-free, but demographic labels are still needed to select units. Max Skew measures deviation from a uniform demographic distribution, which is a specific fairness target rather than a complete fairness assessment. The paper shows that some selected units also encode hairstyle or other concepts, and stronger intervention can reduce general-task accuracy; effects also vary by encoder and training dataset."
      ]
    }
  },
  {
    "slug": "robust-vision-transformers-path-dependency",
    "date": "2026-09-29",
    "publishedDate": "2026-06",
    "topic": "Adversarial robustness",
    "title": "Towards Robust Vision Transformers: Path Dependency Analysis and a Simple Two-Stage Adversarial Training",
    "authors": "Seongmin Kim, Byung Cheol Song",
    "venue": "CVPR 2026 · first public June 2026",
    "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Kim_Towards_Robust_Vision_Transformers_Path_Dependency_Analysis_and_a_Simple_CVPR_2026_paper.html",
    "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_Towards_Robust_Vision_Transformers_Path_Dependency_Analysis_and_a_Simple_CVPR_2026_paper.pdf",
    "summary": "A gradient-path diagnostic finds attack sensitivity in ViT residual paths; a second training stage distills class attention maps and learns residual gates.",
    "care": "For GeoCLIP or GeoSURGE visual backbones, test whether attention-map distillation changes robustness to RoadTrip Attack without harming geolocation. This is my proposal.",
    "readMinutes": 5,
    "visuals": {
      "hero": {
        "src": "./images/gpm-figure-1.png",
        "alt": "Original Figure 1 diagrams Gradient Path Masking: forward attention is unchanged, while backward attack gradients are blocked separately in QK, value and residual paths.",
        "caption": "Figure 1 from Kim and Song, “Towards Robust Vision Transformers” (CVPR 2026); cropped from the official paper.",
        "creditUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_Towards_Robust_Vision_Transformers_Path_Dependency_Analysis_and_a_Simple_CVPR_2026_paper.pdf#page=2"
      }
    },
    "sections": {
      "TL;DR": [
        "The authors separate attack gradients through a ViT block’s query–key, value and residual paths, then add class-attention distillation and learned residual gates to adversarial training."
      ],
      "Why I might care": [
        "GeoCLIP and GeoSURGE use ViT visual encoders, and RoadTrip Attack probes their adversarial behavior. My proposed test is to train a geolocation ViT with this two-stage scheme, then compare clean distance accuracy and RoadTrip Attack success against a matched adversarial-training baseline. This paper evaluates image classification and segmentation, not geolocation."
      ],
      "Why it matters": [
        "Adversarial training recipes built for CNNs may behave differently in transformers. Looking at separate gradient paths and attention maps gives a more specific diagnostic than treating the ViT as one block."
      ],
      "Main idea": [
        "Mask one backward gradient path at a time to see which attack directions depend on it. Use the resulting observations to distill class-attention maps from an adversarially trained teacher into a student and give each student block a learnable residual-path scale."
      ],
      "Method": [
        "Gradient Path Masking leaves the forward pass intact and zeroes the attack gradient through the QK, value or residual branch during backpropagation. In stage one, an ImageNet-pretrained teacher receives conventional adversarial training. In stage two, a student trains with the same adversarial loss plus a pre-softmax class-attention-map distillation loss; learned scalar gates multiply its residual branches. Teacher and student each train for 40 epochs in the reported setup."
      ],
      "Experiments": [
        "On CIFAR-10 with a ViT under PGD-20, attack success is 48.14% with full gradients, 44.59% when QK gradients are masked, and 21.83% when residual gradients are masked (Table 1). Masking limits the attacker’s gradient access; these numbers diagnose the attack, not certified robustness of a modified model.",
        "For ImageNet-pretrained ViT-S adversarially trained on CIFAR-10 with an 8/255 attack budget, PGD-AT gives 79.59% clean accuracy and 46.37% AutoAttack accuracy; the two-stage method gives 82.01% and 47.41%. On ImageNette, ConViT under PGD-AT moves from 39.00% to 56.20% AutoAttack accuracy, with clean accuracy from 69.00% to 84.20%. Table 3 evaluates ViT, DeiT, ConViT, CeiT and CvT under PGD-AT, TRADES and MART."
      ],
      "What is new": [
        "The Gradient Path Masking analysis, plus a two-stage training recipe that combines hierarchical class-attention distillation with per-block residual gating. The ablation separately measures the two additions."
      ],
      "Limitations": [
        "The robustness results are on CIFAR-10 and ImageNette with ImageNet-pretrained, mostly small ViT variants; broader tasks and scales are untested. The two-stage setup trains a teacher and then a student, adding training work. Path masking weakens the attack gradient, so its attack-success drop alone does not prove a causal robustness mechanism. The paper’s explanation linking global early attention to hybrid-model behavior remains an interpretation of these experiments."
      ]
    }
  },
  {
  "slug": "geosurge-hierarchical-geographic-embeddings",
  "date": "2026-09-28",
  "publishedDate": "2025-10-01",
  "topic": "Image geolocation",
  "title": "GeoSURGE: Geo-localization using Semantic Fusion with Hierarchy of Geographic Embeddings",
  "authors": "Angel Daruna, Nicholas Meegan, Han-Pang Chiu, Supun Samarasekera, Rakesh Kumar",
  "venue": "CVPR 2026 · first public 1 Oct 2025",
  "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Daruna_GeoSURGE_Geo-localization_using_Semantic_Fusion_with_Hierarchy_of_Geographic_Embeddings_CVPR_2026_paper.html",
  "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Daruna_GeoSURGE_Geo-localization_using_Semantic_Fusion_with_Hierarchy_of_Geographic_Embeddings_CVPR_2026_paper.pdf",
  "summary": "GeoSURGE matches an image to learned geographic cell embeddings at several scales, after fusing RGB features with a semantic segmentation map.",
  "care": "For geolocation attacks, test whether its cell hierarchy changes transfer from GeoCLIP. This is a proposed experiment, not a result in the paper.",
  "readMinutes": 5,
  "visuals": {
  "hero": {
    "src": "./images/geosurge-figure-1.png",
    "alt": "GeoSURGE workflow: an RGB photograph and semantic segmentation feed CLIP and semantic fusion, which are matched to hierarchical geographic embeddings for a predicted location.",
    "caption": "Figure 1 from Daruna et al., “GeoSURGE” (CVPR 2026). Rendered from the official paper without altering the diagram.",
    "creditUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Daruna_GeoSURGE_Geo-localization_using_Semantic_Fusion_with_Hierarchy_of_Geographic_Embeddings_CVPR_2026_paper.pdf#page=2"
  }
},
  "sections": {
    "TL;DR": [
      "GeoSURGE learns embeddings for nested geographic cells and aligns them with image features. A segmentation-aware visual encoder helps it distinguish scenes whose appearance alone is ambiguous."
    ],
    "Why I might care": [
      "If you test adversarial attacks on GeoCLIP, GeoSURGE is a useful alternative target: it uses a CLIP visual backbone but represents locations with learned cell embeddings instead of coordinate features. My proposed test is to transfer the same perturbations to GeoSURGE and measure accuracy at 1, 25 and 2,500 km; the authors did not evaluate adversarial robustness. The semantic branch also suggests a controlled test with foreground insertions like those in GeoBiaset."
    ],
    "Why it matters": [
      "Global image geolocation must cover the whole Earth while preserving fine spatial distinctions. A flat cell classifier loses spatial relations; searching a large geotagged image gallery can be costly. This paper gives each cell a learned feature vector and uses several cell scales together."
    ],
    "Main idea": [
      "Partition the Earth into nested S2 geocells and learn an embedding for each cell. Match a query's fused visual representation to cells at every level, then combine parent and child probabilities to predict a location."
    ],
    "Method": [
      "OneFormer produces an ADE20K semantic segmentation map. GeoSURGE fuses its tokens with CLIP ViT-L/14-336 RGB tokens through latent cross-attention. Contrastive training aligns the fused image feature with the corresponding learned geocell embedding at each hierarchy level. Inference combines the softmax probabilities of each fine cell and its ancestors."
    ],
    "Experiments": [
      "The authors train on MP-16 and report the share of predictions within great-circle-distance thresholds on five benchmarks. On IM2GPS3k, accuracy within 2,500 km is 87.6%, versus 83.8% for GeoCLIP and 84.7% for Img2Loc/GPT-4V; at 25 km, GeoSURGE reaches 42.5% versus Img2Loc's 45.1%. On YFCC4k, its 2,500 km accuracy is 82.0%, versus 75.3% for GeoCLIP and 78.1% for G3/GPT-4V.",
      "On YFCC26k, the 1 km result is 17.8% with three semantic fusion blocks versus 13.8% without fusion; the seven-level hierarchy scores 17.8% versus 8.9% for the one-level ablation. These are ablations within this model, not independent evidence of robustness to distribution shift."
    ],
    "What is new": [
      "The combination of learned geographic embeddings at multiple cell scales with segmentation-aware image features. Unlike coordinate embeddings, the location representation is learned for each cell; unlike an ordinary cell classifier, prediction uses feature similarity across a hierarchy."
    ],
    "Limitations": [
      "The benchmark results do not cover attacks or manipulated foregrounds. The geographic representation is learned from the training image distribution: the paper shows a failure where the nearest training reference to the true cell is about 806 km away. GeoSURGE is not best on every threshold; for example, PIGEOTTO scores 84.7% within 2,500 km on GWS15k versus GeoSURGE's 80.8%."
    ]
  }
},
  {
  "slug": "eventgem-event-based-place-recognition",
  "date": "2026-09-28",
  "publishedDate": "2026-03-06",
  "topic": "Visual place recognition",
  "title": "EventGeM: Global-to-Local Feature Matching for Event-Based Visual Place Recognition",
  "authors": "Adam D. Hines, Gokul B. Nair, Nicolás Marticorena, Michael Milford, Tobias Fischer",
  "venue": "arXiv preprint v2 · under review",
  "sourceUrl": "https://arxiv.org/abs/2603.05807v2",
  "pdfUrl": "https://arxiv.org/pdf/2603.05807v2",
  "summary": "EventGeM turns event-camera streams into place descriptors, retrieves a shortlist, then checks local keypoint geometry to handle changed viewpoints.",
  "care": "For VPR, test whether regional pooling and geometric reranking still help when train and test routes differ. This is a proposed experiment.",
  "readMinutes": 5,
  "visuals": {
  "hero": {
    "src": "./images/eventgem-figure-1.png",
    "alt": "EventGeM workflow: an event stream passes through SuperEvent; global features shortlist places by cosine similarity and local keypoints re-rank them with RANSAC.",
    "caption": "Figure 1 from Hines et al., “EventGeM” (arXiv:2603.05807v2). Rendered from the original paper without altering the diagram.",
    "creditUrl": "https://arxiv.org/html/2603.05807v2#S1.F1"
  }
},
  "sections": {
    "TL;DR": [
      "EventGeM retrieves places from event-camera data with a frozen event-native transformer, learned regional GeM pooling, and keypoint-based geometric re-ranking. The revised paper also tests a deliberately shifted camera path."
    ],
    "Why I might care": [
      "This is a compact example of global retrieval followed by local verification, a design relevant to visual place recognition and image retrieval. My proposed test is to train its pooling head on one geographic route and evaluate on disjoint routes and camera heights, with and without geometric re-ranking; the paper tests a lateral shift but does not report that broader transfer study."
    ],
    "Why it matters": [
      "Event cameras work in fast or high-dynamic-range settings, but a repeat traversal can change viewpoint as well as lighting. A whole-image descriptor can retrieve plausible places; local geometric matches can then separate lookalikes in the shortlist."
    ],
    "Main idea": [
      "Convert event streams to multi-channel time surfaces, form a compact place descriptor from the frozen SuperEvent feature map, and re-rank the top matches using SuperEvent's own keypoints and RANSAC."
    ],
    "Method": [
      "A 4 × 4 regional GeM grid retains rough spatial arrangement, with one learned pooling exponent per row. The exponents and then a residual descriptor head are trained on NYC-Event-VPR while the SuperEvent backbone stays frozen. Cosine similarity provides the top-50 shortlist; RANSAC homography inlier counts re-order it, with global similarity breaking ties. The revised v2 method does not use the optional depth re-ranking described in v1."
    ],
    "Experiments": [
      "With 50 ms event windows and a 70 m correctness tolerance, Brisbane-Event-VPR's Morning query versus Sunset2 reference yields Recall@1 of 0.87 for EventGeM, 0.61 for its global descriptor alone and 0.53 for the SuperEvent baseline. On the new Gardens-Point-Event traverses, separated laterally by about 5 m and scored at 25 m tolerance, Recall@1 is 0.55 versus 0.18 for EventVLAD and 0.37 for EventGeM before re-ranking.",
      "The on-robot indoor demonstration uses a 3 m tolerance and reports Recall@1 of 0.88 at 24 queries per second on a Jetson Orin AGX. This demonstrates the reported setup's throughput; it is not a universal latency guarantee."
    ],
    "What is new": [
      "An event-native retrieval pipeline that learns row-specific regional GeM pooling and combines a global shortlist with keypoints from the same backbone. The authors also contribute a viewpoint-shifted event-camera evaluation route."
    ],
    "Limitations": [
      "Night-time NSAVP remains difficult: EventGeM reaches 0.15 Recall@1, although the compared methods are lower. Homography inliers check geometric consistency but do not model arbitrary 3D viewpoint changes exactly. The backbone is frozen, and the paper's event-window ablation shows a trade-off between recall and update frequency."
    ]
  }
},
  {
  "slug": "tiger-geo-time-aware-retrieval",
  "date": "2026-09-28",
  "publishedDate": "2026-03-25",
  "topic": "Image retrieval",
  "title": "TIGeR: A Unified Framework for Time, Images and Geo-location Retrieval",
  "authors": "David G. Shatwell, Sirnam Swetha, Mubarak Shah",
  "venue": "CVPR 2026 · first public 25 Mar 2026",
  "sourceUrl": "https://openaccess.thecvf.com/content/CVPR2026/html/Shatwell_TIGER_A_Unified_Framework_for_Time_Images_and_Geo-location_Retrieval_CVPR_2026_paper.html",
  "pdfUrl": "https://openaccess.thecvf.com/content/CVPR2026/papers/Shatwell_TIGER_A_Unified_Framework_for_Time_Images_and_Geo-location_Retrieval_CVPR_2026_paper.pdf",
  "summary": "TIGeR puts images, coordinates and capture time in a shared space to retrieve the same place at a requested time and to predict place or time.",
  "care": "For geolocation retrieval, test whether capture time improves seasonal matches without leaking camera identity. This is a proposed test, not an author result.",
  "readMinutes": 5,
  "visuals": {
  "hero": {
    "src": "./images/tiger-figure-1.png",
    "alt": "TIGeR example: a snowy query image and a July target time retrieve a summer image of the same place from an image gallery.",
    "caption": "Figure 1 from Shatwell, Swetha and Shah, “TIGeR” (CVPR 2026). Original figure reproduced unchanged.",
    "creditUrl": "https://arxiv.org/html/2603.24749v2#S1.F1"
  }
},
  "sections": {
    "TL;DR": [
      "TIGeR learns a shared representation of images, GPS and capture time. It can retrieve an image of a query place at a requested time, and reuse the representation for geolocation and time prediction."
    ],
    "Why I might care": [
      "For image geolocation and retrieval, time can be an extra cue or a nuisance variable when seasons change. My proposed test is to evaluate TIGeR on MP-16 or an OSV gallery with cameras and locations held out, comparing image-only and image-plus-time geolocation at multiple distance thresholds. The authors' benchmarks use different data and do not answer that question."
    ],
    "Why it matters": [
      "An image of the same place can look very different across seasons or hours. Retrieval by visual similarity alone can miss the location, while a model that explicitly represents capture time can ask for the place under different conditions."
    ],
    "Main idea": [
      "Map any available combination of image, coordinates and time into one geo-temporal space. A query image plus target time can then be matched against gallery images even when their appearances differ."
    ],
    "Method": [
      "A frozen CLIP ViT encodes images; random Fourier features encode coordinates and cyclic time. A shared multimodal transformer lets available tokens interact. Five contrastive alignments train single- and paired-modality embeddings, while soft-target location and time classification heads provide structured supervision. An entropy-weighted class prior re-ranks geolocation candidates when the classifier is confident."
    ],
    "Experiments": [
      "The authors curate 4.5 million training and 86,000 test image-location-time records from AMOS with disjoint cameras. For image-plus-target-time retrieval on TIGeR-test-86k, Recall@5 is 23.30% versus 8.80% for the replicated Zhai et al. baseline with a CLIP backbone. On CVT, Recall@1 is 14.55%, below GT-Loc's 16.45%; CVT counts a retrieval correct when it is within 125 km of the query and matches the requested time.",
      "For image-only geolocation on TIGeR-test-86k, 48.63% of predictions lie within 200 km, versus 21.58% for GeoCLIP. Adding time does not always help: on that benchmark, TIGeR's 200 km accuracy changes from 48.63% without time to 48.34% with time."
    ],
    "What is new": [
      "The paper defines image-plus-time retrieval of a place at a requested time, curates a large evaluation set for it, and trains one fused representation that supports this task alongside location and time prediction."
    ],
    "Limitations": [
      "The principal curated benchmark comes from fixed webcams, so its repeated-view setting is narrower than arbitrary user photographs; CVT provides a separate photo test but uses a coarse 125 km retrieval tolerance. The model is not best on every measure, including CVT retrieval Recall@1. Time is an ambiguous location cue, which the authors also observe when adding it fails to improve some geolocation results."
    ]
  }
},
  {
    slug: 'adversarial-road-trips-geolocalization',
    date: '2026-09-26',
    publishedDate: '2026-07-03',
    topic: 'Image geolocation',
    title: 'Defending from GeoLocalization through Adversarial Road Trips',
    authors: 'Niccolò Niccoli, Federico Becattini, Lorenzo Seidenari',
    venue: 'ECCV 2026 · arXiv:2607.03277',
    sourceUrl: 'https://arxiv.org/abs/2607.03277',
    pdfUrl: 'https://arxiv.org/pdf/2607.03277',
    summary: 'RoadTrip Attack redirects a retrieval-based geolocalizer toward a distant chosen location by optimizing a sequence of intermediate geographic targets.',
    care: 'A concrete attack and evaluation baseline if you study geolocation privacy or adversarial robustness.',
    readMinutes: 7,
    visuals: {
      hero: {
        src: './images/roadtrip-figure-1.png',
        alt: 'Figure 1 from the paper: an original photo, a subtly perturbed version, and the RoadTrip Attack path through candidate geographic locations toward a target.',
        caption: 'Figure 1 from Niccoli, Becattini and Seidenari, “Defending from GeoLocalization through Adversarial Road Trips” (arXiv:2607.03277).',
        creditUrl: 'https://arxiv.org/html/2607.03277#S1.F1'
      }
    },
    sections: {
      'TL;DR': ['RoadTrip Attack (RTA) adds a small image perturbation that steers a retrieval-based geolocalizer toward an attacker-chosen location. Instead of optimizing directly for that destination, it searches over intermediate geographic targets and keeps the most promising paths.'],
      'Why I might care': ['If you work on image geolocalization or adversarial robustness, RTA offers a task-specific way to probe privacy risk. Its black-box transfer tests are especially relevant when the model used by a third party is unknown.', 'A useful follow-up is to test whether ordinary image processing, such as JPEG compression, reduces the attack; the paper identifies preprocessing and purification defenses as future work.'],
      'Why it matters': ['A geolocalizer can infer where an image was taken from its visual content, even when explicit location metadata is absent. That creates a privacy concern for people who share photos. The paper studies whether subtle changes to an image can disrupt that inference.'],
      'Main idea': ['Treat a targeted attack as a journey through geographic space. A direct gradient attack can settle on a poor path; RTA explores several intermediate destinations at once and retains candidates whose predictions move closest to the final target.'],
      'Method': ['First choose a target more than 2,500 km from the true location. For each surviving candidate, sample intermediate coordinates around that target; the sampling radius shrinks as the predicted location approaches it.', 'Use projected gradient descent to perturb the query image toward each sampled coordinate, within a bounded pixel-change budget. Keep the best K candidates by Haversine distance to the final target, then repeat. The reported experiments use four beams and five parallel targets per step.'],
      'Experiments': ['The white-box tests attack GeoCLIP on Im2GPS3k and YFCC4k. At a 2/255 perturbation budget, RTA puts 93.43% of attacked Im2GPS3k predictions within 1 km of the chosen target, versus 71.81% for PGD; on YFCC4k, the corresponding figures are 88.60% and 62.30%.', 'For black-box transfer, the authors build attacks with GeoCLIP as a surrogate and test Img2Loc and G3. At the same budget on Im2GPS3k, only 7.61% of Img2Loc predictions remain within 25 km of the true location after RTA, compared with 24.42% after GeoShield; lower is better for this metric. The paper also reports lower perceptual distortion than GeoShield.'],
      'What is new': ['The attack uses geographic structure to guide adversarial search. Beam search over intermediate coordinates finds paths that a direct fixed-target gradient attack may miss, while retaining a small perturbation budget and transferring to other geolocalizers.'],
      'Limitations': ['The reported tests cover two benchmarks, with GeoCLIP as the white-box model and two black-box target models; they do not establish that every geolocalizer is equally vulnerable.', 'Robustness against JPEG compression, input transformations and purification defenses remains untested here and is listed as future work. RTA also explores more candidates than PGD and uses more GPU memory, although much of its work can run in parallel.']
    }
  }
];

export const topics = ['All topics', ...new Set(papers.map(paper => paper.topic))];
