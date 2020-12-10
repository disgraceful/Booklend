<template>
  <div class="video-container">
    <img
      class="video"
      src="https://interamericanheart.org/wp-content/uploads/2020/03/covid19maxresdefault.jpg"
    />
    <button class="play-btn">
      <div class="play-btn--arrow"></div>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.video-container {
  width: 210px;
  height: 160px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  box-shadow: 0 20px 40px 0 color("red-dark");
  border-radius: 12px;
  overflow: hidden;

  &:hover {
    transform: translate(6px, 6px);
    box-shadow: 0 10px 20px 0 color("red-dark");
  }

  &::after {
    content: "";
    background-color: color("red-transparent7");
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
  }

  .video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
}

.play-btn {
  background-color: #fff;
  width: 72px;
  height: 72px;
  border: 8px solid rgba(255, 255, 255, 0.3);
  background-clip: padding-box;
  position: absolute;
  top: calc(50% - 36px);
  left: 50%;
  margin-left: -36px;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  transition: all 0.2s ease-out;

  .play-btn--arrow {
    position: absolute;
    left: calc(50% - 5px);
    top: calc(50% - 10px);
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 16px solid color("red-solid");
    transition: all 0.3s ease-out;
  }

  &:hover {
    border-color: #fff;
    background-clip: border-box;

    .play-btn--arrow {
      left: calc(50% - 13px);
      top: calc(50% - 25px);
      border-top: 26px solid transparent;
      border-bottom: 26px solid transparent;
      border-left: 35px solid color("red-solid");
    }
  }
}
</style>
