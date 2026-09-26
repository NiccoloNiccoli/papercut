// Issue dates are when a summary appears on PaperCut; publishedDate is the paper's publication date.
// Entries without a sourceUrl remain illustrative layout content.
export const papers = [
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
        src: './images/roadtrip-illustration.svg',
        alt: 'Conceptual illustration: a lightly altered photo sends a geolocalization model through intermediate predicted places toward a distant chosen target.',
        caption: 'How the attack works, illustrated for PaperCut. The photo and locations are schematic, not experiment examples.'
      },
      experiments: {
        src: './images/roadtrip-results.svg',
        alt: 'At a 2/255 perturbation budget, targeted accuracy within 1 km is 93.43% for RoadTrip Attack versus 71.81% for PGD on Im2GPS3k, and 88.60% versus 62.30% on YFCC4k.',
        caption: 'PaperCut chart of the paper’s reported white-box GeoCLIP results. Higher means more predictions within 1 km of the attacker-chosen target.'
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
  },
  {
    slug: 'finding-a-place-from-image-clues',
    date: '2026-09-22',
    topic: 'Image geolocation',
    title: 'Finding a place from the clues in a single image',
    summary: 'A visual retrieval approach that connects local image details with broader geographic context.',
    care: 'Useful for testing whether local landmarks make your geolocation models more robust.',
    readMinutes: 6,
    sections: {
      'TL;DR': ['Combine local visual clues with global image retrieval to narrow down where a photo was taken. The useful question: does this help when the location is unfamiliar?'],
      'Why I might care': ['For your work on image geolocation, this suggests a practical experiment: compare global embeddings with local landmark features, then test both on unseen regions.', 'Worth trying: measure regional errors separately instead of relying on one global score.'],
      'Why it matters': ['Visually similar places can be far apart. A model needs more than a recognizable landmark to locate ordinary scenes reliably.'],
      'Main idea': ['Use a broad retrieval step to find candidate locations, then rerank them using finer visual evidence.'],
      'Method': ['1. Encode the image with a global visual embedding.', '2. Retrieve candidate places from a geographically indexed collection.', '3. Refine the ranking with local details such as terrain and architecture.'],
      'Experiments': ['Compare retrieval-only and reranked predictions. Report city-, region-, and country-level accuracy, and evaluate unseen locations separately.', 'This is illustrative content; reported results will appear here once a real paper is summarized.'],
      'What is new': ['The point to assess is how local evidence changes the ranking of global candidates, not simply whether the image encoder is larger.'],
      'Limitations': ['Coverage depends on the geographic reference collection.', 'Sparse or repetitive scenes may offer few useful clues.', 'Performance on new regions needs its own evaluation.']
    }
  },
  {
    slug: 'task-aware-video-compression',
    date: '2026-09-21',
    topic: 'Video compression',
    title: 'Compressing video for the task, not just the pixels',
    summary: 'A task-aware approach that prioritizes the visual information a downstream model actually needs.',
    care: 'A useful starting point for connecting compression with pose estimation and restoration.',
    readMinutes: 5,
    sections: {
      'TL;DR': ['A compression system can be judged by whether it preserves the information needed by a downstream vision task, alongside visual fidelity.'],
      'Why I might care': ['If your final goal is pose estimation, you could test whether a task-aware codec keeps the features your model needs at lower bitrates.'],
      'Why it matters': ['Pixel quality alone does not reveal whether compressed video is still useful to a machine vision model.'],
      'Main idea': ['Allocate bits around features that matter to the target task, then compare task quality and bitrate.'],
      'Method': ['Define a task-level objective, compress the video, and evaluate the downstream model on the decoded frames.'],
      'Experiments': ['Compare bitrate, perceived quality, and downstream task accuracy across compression settings. This is illustrative content; reported results will appear once a real paper is summarized.'],
      'What is new': ['The evaluation emphasis shifts from image fidelity alone to usefulness for a specific vision task.'],
      'Limitations': ['A codec tuned for one task may not transfer to another.', 'Task-aware training can add complexity.']
    }
  },
  {
    slug: 'robust-poses-low-light', date: '2026-09-25', topic: 'Pose estimation',
    title: 'Robust poses in low-light images', summary: 'Exploring what makes pose models reliable when visual evidence is weak.',
    care: 'Relevant to pose estimation in difficult conditions.', readMinutes: 7
  },
  {
    slug: 'visual-attack-transfer', date: '2026-09-24', topic: 'Adversarial attacks',
    title: 'What makes visual attacks transfer?', summary: 'A reading prompt about model robustness across architectures.',
    care: 'A useful comparison point for adversarial robustness work.', readMinutes: 6
  },
  {
    slug: 'restoration-and-recognition', date: '2026-09-23', topic: 'Image restoration',
    title: 'Restoration that helps recognition', summary: 'Asking whether better-looking images also help downstream models.',
    care: 'Connects restoration quality with task performance.', readMinutes: 5
  }
];

export const topics = ['All topics', 'Image geolocation', 'Adversarial attacks', 'Video compression', 'Image restoration', 'Pose estimation'];

