
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview');
const preview = imagePreview.querySelector('img');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const changeSlider = (opts) => {
  const {min, max, step, start} = opts;
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: min,
      max: max,
    },
    step: step,
    start: start,
  });
};

const changeOriginalEffect = () => {
  preview.style.filter = '';
  sliderContainer.classList.add('hidden');
};

// Объект с фильтрами
const PARAMETERS_EFFECTS = {
  'effect-chrome': {
    opts: {
      // Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
      min: 0,
      max: 1,
      step: 0.1,
      start: 1,
    },
    effectName: 'grayscale',
    unitMeasurement: '',
  },
  'effect-sepia': {
    opts: {
    // Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
      min: 0,
      max: 1,
      step: 0.1,
      start: 1,
    },
    effectName: 'sepia',
    unitMeasurement: '',
  },
  'effect-marvin': {
    // Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
    opts: {
      min: 0,
      max: 100,
      step: 1,
      start: 100,
    },
    effectName: 'invert',
    unitMeasurement: '%',
  },
  'effect-phobos': {
    //Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
    opts: {
      min: 0,
      max: 3,
      step: 0.1,
      start: 3,
    },
    effectName: 'blur',
    unitMeasurement: 'px',
  },
  'effect-heat': {
    // Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
    opts: {
      min: 1,
      max: 3,
      step: 0.1,
      start: 3,
    },
    effectName: 'brightness',
    unitMeasurement: '',
  }
};

const changeValueEffect = (effectName, unitMeasurement) => {
  sliderElement.noUiSlider.off();
  sliderElement.noUiSlider.on('update', () => {
    effectLevelValue.value = sliderElement.noUiSlider.get();
    preview.style.filter = `${effectName}(${effectLevelValue.value}${unitMeasurement})`;
  });
};


const onEffectListChange = (evt) => {
  const effect = evt.target.id;
  if (effect === 'effect-none') {
    changeOriginalEffect();
    return;
  }
  sliderContainer.classList.remove('hidden');
  const opts = PARAMETERS_EFFECTS[effect].opts;
  const effectName = PARAMETERS_EFFECTS[effect].effectName;
  const unitMeasurement = PARAMETERS_EFFECTS[effect].unitMeasurement;
  changeSlider(opts);
  changeValueEffect(effectName, unitMeasurement);
};

export {changeOriginalEffect, onEffectListChange};
