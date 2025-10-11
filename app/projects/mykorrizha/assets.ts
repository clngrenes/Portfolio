import schoolGarden from '@assets/MYKORRIZHA/school-garden.png';
import skillTree from '@assets/MYKORRIZHA/skill-tree.jpeg';
import supervisorDashboard from '@assets/MYKORRIZHA/teacher-view.jpg';
import brochureFront from '@assets/MYKORRIZHA/brochure-1.jpeg';
import brochureInside from '@assets/MYKORRIZHA/brochure-2.jpeg';
import conclusionIllustration from '@assets/MYKORRIZHA/3.jpg';
// @ts-expect-error -- bundler resolves mp4 asset via webpack alias
import roleModelsVideo from '@assets/MYKORRIZHA/einstein.mp4';
// @ts-expect-error -- bundler resolves mp4 asset via webpack alias
import aiAgentsVideo from '@assets/MYKORRIZHA/agents.mp4';
import competenceAgent from '@assets/MYKORRIZHA/ILLUSTRATIONS/competence.png';
import interestAgent from '@assets/MYKORRIZHA/ILLUSTRATIONS/interest.png';
import adaptationAgent from '@assets/MYKORRIZHA/ILLUSTRATIONS/adaption.png';
import didacticsAgent from '@assets/MYKORRIZHA/ILLUSTRATIONS/didactic.png';
import contextAgent from '@assets/MYKORRIZHA/ILLUSTRATIONS/context.png';
import reflectionAgent from '@assets/MYKORRIZHA/ILLUSTRATIONS/reflect.png';
import schedulingAgent from '@assets/MYKORRIZHA/ILLUSTRATIONS/time.png';
import trustAgent from '@assets/MYKORRIZHA/ILLUSTRATIONS/security.png';
import socialAgent from '@assets/MYKORRIZHA/ILLUSTRATIONS/social.png';

export const mykorrizhaAssets = {
  schoolGarden,
  skillTree,
  supervisorDashboard,
  brochure: {
    front: brochureFront,
    inside: brochureInside,
  },
  conclusionIllustration,
  roleModelsVideo,
  aiAgentsVideo,
  agents: {
    competenceAgent,
    interestAgent,
    adaptationAgent,
    didacticsAgent,
    contextAgent,
    reflectionAgent,
    schedulingAgent,
    trustAgent,
    socialAgent,
  },
};
