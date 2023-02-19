export const changeActiveSubSettings = (el: HTMLElement) => {
  const parentEl = el.parentElement;
  [...parentEl!.children].forEach((element) => {
    element.classList.remove('active-subsettings');
  });
};

export const offSubtitle = (video: HTMLVideoElement) => {
  for (const sub of video.textTracks) {
    sub.mode = 'hidden';
  }
};

export const onSubtitle = (video: HTMLVideoElement, lang: 'en' | 'ru' = 'en') => {
  for (const sub of video.textTracks) {
    if (sub.language === lang) sub.mode = 'showing';
    else sub.mode = 'hidden';
  }
};