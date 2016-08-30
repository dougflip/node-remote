class VolumeSliderComponent {
  constructor() {}

  $onInit() {
    this.currentLevel = this.level || 0;
    this.restoreLevel = this.currentLevel;
  }

  mute() {
    this.restoreLevel = this.currentLevel;
    this.currentLevel = 0;
    this.onCurrentLevelChange(0);
  }

  restoreVolume() {
    this.currentLevel = this.restoreLevel;
    this.onCurrentLevelChange(this.currentLevel);
  }

  onCurrentLevelChange(level = this.currentLevel) {
    this.onLevelChange({ $event: { level } });
  }
}

export default {
  template: require('./volume-slider-component.html'),
  controller: VolumeSliderComponent,
  bindings: {
    level: '@',
    onLevelChange: '&',
  }
};
