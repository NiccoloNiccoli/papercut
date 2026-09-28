// Issue dates are when a summary appears on PaperCut; publishedDate is the paper's publication date.
export const papers = [
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

