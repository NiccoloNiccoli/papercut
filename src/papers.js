// Issue dates are when a summary appears on PaperCut; publishedDate is the paper's publication date.
export const papers = [
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

