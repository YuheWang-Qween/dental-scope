/**
 * Quiz identification clues, one per tooth type, reused for the four teeth of
 * that type. Each clue describes a distinguishing visual trait that holds for
 * both arches, never names the tooth's exact type, arch or side, and never
 * carries an FDI number.
 *
 * DRAFT content: the wording mirrors the sourced summaries in
 * `src/content/<lang>/teeth.json` (the `tooth:<type>:<arch>` entries), which are
 * themselves marked draft and pending expert review — see docs/content.md.
 * Facts such as the long single cusp of the canines, the larger cheek-side
 * cusp of the first premolars or the three (maxillary) / two (mandibular)
 * roots of the first molars come from those entries, so the clues stay draft
 * until the underlying content is reviewed.
 */
import type { ToothType } from '../anatomy/types';
import type { Lang } from './lang';

type TypeHints = Record<ToothType, string>;

export const QUIZ_HINTS: Record<Lang, TypeHints> = {
  en: {
    'central-incisor': 'A front tooth with a broad, straight cutting edge.',
    'lateral-incisor': 'The incisor beside the central one, with a more rounded outline.',
    canine: 'A corner tooth with one long, pointed cusp.',
    'first-premolar': 'A premolar whose outer (cheek-side) cusp is clearly the larger.',
    'second-premolar': 'A premolar whose cusps are more evenly matched than the first premolar’s.',
    'first-molar': 'The largest tooth of its arch, with a broad crown and two or three well-separated roots.',
    'second-molar': 'A molar behind the first one, slightly smaller, with roots that run closer together.',
    'third-molar': 'The last tooth of the arch, and the most variable in shape.',
  },
  zh: {
    'central-incisor': '位于牙列前方，切缘宽而直。',
    'lateral-incisor': '紧邻中切牙，牙冠轮廓较圆。',
    canine: '位于牙弓转角，具有一个长而尖的牙尖。',
    'first-premolar': '这颗前磨牙的颊尖明显较大。',
    'second-premolar': '与第一前磨牙相比，这颗牙的牙尖大小较为接近。',
    'first-molar': '本牙弓中体积最大的牙，冠宽，有两到三个分开的牙根。',
    'second-molar': '位于第一磨牙之后，体积稍小，牙根靠得更近。',
    'third-molar': '牙弓中最后一颗牙，外形变异最大。',
  },
  sv: {
    'central-incisor': 'En framtand med en bred, rak skärande kant.',
    'lateral-incisor': 'Incisiven bredvid den centrala incisiven, med en mer rundad kontur.',
    canine: 'En tand i tandbågens hörn med en enda lång, spetsig kusp.',
    'first-premolar': 'En premolar vars yttre (buckala) kusp är klart störst.',
    'second-premolar': 'En premolar vars kuspar är mer jämnstora än den första premolarens.',
    'first-molar': 'Den största tanden i sin tandbåge, med en bred krona och två eller tre väl åtskilda rötter.',
    'second-molar': 'En molar bakom den första, något mindre, med rötter som ligger närmare varandra.',
    'third-molar': 'Den sista tanden i tandbågen och den mest varierande i form.',
  },
  de: {
    'central-incisor': 'Ein Frontzahn mit breiter, gerader Schneidekante.',
    'lateral-incisor': 'Der Schneidezahn neben dem mittleren, mit einer runderen Kontur.',
    canine: 'Ein Eckzahn mit einem einzigen langen, spitzen Höcker.',
    'first-premolar': 'Ein Prämolar, dessen äußerer (bukkal gelegener) Höcker deutlich größer ist.',
    'second-premolar': 'Ein Prämolar, dessen Höcker gleichmäßiger sind als die des ersten Prämolaren.',
    'first-molar': 'Der größte Zahn seines Zahnbogens, mit breiter Krone und zwei oder drei deutlich getrennten Wurzeln.',
    'second-molar': 'Ein etwas kleinerer Molar hinter dem ersten, dessen Wurzeln enger beieinander stehen.',
    'third-molar': 'Der letzte Zahn des Zahnbogens und in seiner Form am variabelsten.',
  },
  es: {
    'central-incisor': 'Un diente anterior con un borde incisal ancho y recto.',
    'lateral-incisor': 'El incisivo junto al central, con un contorno más redondeado.',
    canine: 'Un diente de la esquina de la arcada con una sola cúspide larga y puntiaguda.',
    'first-premolar': 'Un premolar cuya cúspide exterior (vestibular) es claramente la mayor.',
    'second-premolar': 'Un premolar con cúspides más parejas que las del primer premolar.',
    'first-molar': 'El diente más grande de su arcada, con corona ancha y dos o tres raíces bien separadas.',
    'second-molar': 'Un molar algo más pequeño detrás del primero, con raíces más juntas.',
    'third-molar': 'El último diente de la arcada y el más variable en su forma.',
  },
  la: {
    'central-incisor': 'Dens anterior margine incisali lata et recta.',
    'lateral-incisor': 'Incisivus iuxta medialem situs, ambitu incisali rotundiore.',
    canine: 'Dens in angulo arcus una cuspide longa et acuta.',
    'first-premolar': 'Premolaris cuspide exteriore (buccali) clare maiore.',
    'second-premolar': 'Premolaris cuspidibus aequalioribus quam primus premolaris.',
    'first-molar': 'Dens maximus sui arcus, corona lata, duabus vel tribus radicibus bene separatis.',
    'second-molar': 'Molaris paulo minor post primum, radicibus propius iunctis.',
    'third-molar': 'Ultimus dens arcus, forma maxime varius.',
  },
};
