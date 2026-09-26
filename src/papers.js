// Illustrative copy for the first site version. Replace these entries with sourced summaries.
export const papers = [
  {
    slug: 'finding-a-place-from-image-clues',
    date: '2026-09-26',
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
    date: '2026-09-26',
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

