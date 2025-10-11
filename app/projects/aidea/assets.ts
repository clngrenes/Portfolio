import aideaCover from '@assets/COVERS/aidea-cover.jpg';
import audienceImage from '@assets/AIDEA/target-group.jpg';
import sketchStart from '@assets/AIDEA/sketch-start.jpg';
import sketchEnd from '@assets/AIDEA/sketch-end.jpg';
import smartPen from '@assets/AIDEA/pen.jpg';
import toolsImage from '@assets/AIDEA/tools.jpg';
// @ts-expect-error -- bundler resolves mp4 asset via webpack alias
import impactVideo from '@assets/AIDEA/logo.mp4';
import historyStill from '@assets/AIDEA/history.jpg';
import canvasView from '@assets/AIDEA/canvas.jpg';
import colorMode from '@assets/AIDEA/color-mode.jpg';
import imageMode from '@assets/AIDEA/image-mode.jpg';
import functionView from '@assets/AIDEA/function.jpg';
import interfaceImage from '@assets/AIDEA/realtime.jpg';

export const aideaAssets = {
  cover: aideaCover,
  audienceImage,
  penSketchStart: sketchStart,
  penSketchEnd: sketchEnd,
  smartPen,
  toolsImage,
  impactVideo,
  historyStill,
  interfaceImage,
  modes: {
    canvasView,
    colorMode,
    imageMode,
    functionView,
  },
};
