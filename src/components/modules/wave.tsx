// hooks
import { useCanvasContext } from '@/hooks/useCanvas';
import useResponsiveSize from '@/hooks/ีuseResponsiveSize';

// utils
import WaveObj from '@/utils/wave'

const Wave = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.0065;
  const waves = {
    frontWave: new WaveObj([0.0211, 0.028, 0.015], '#0084ff7a'),
    backWave: new WaveObj([0.0122, 0.018, 0.005], '#78baf863'),
  };

  const render = () => {
    context?.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context!, width, height, frequency);
    });
    frequency += 0.0065;
    requestAnimationFrame(render);
  };
  if (context) render();
  return null;
};

export default Wave;
