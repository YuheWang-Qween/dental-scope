import { LANGS, type Lang } from './lang';

const text = {
  sceneDescription: ['3D view of dental anatomy. Drag to orbit, scroll to zoom, click a structure to inspect it.', 'Tandanatomi i 3D. Dra för att rotera, skrolla för att zooma och klicka på en struktur för att undersöka den.', 'Zahnanatomie in 3D. Zum Drehen ziehen, zum Zoomen scrollen und eine Struktur anklicken, um sie zu untersuchen.', 'Anatomía dental en 3D. Arrastra para girar, desplázate para acercar o alejar y selecciona una estructura para examinarla.', 'Anatomia dentium in tribus dimensionibus. Trahe ut vertas, rotulam move ut amplifices et structuram elige ut inspicias.', '三维牙齿解剖模型。拖动可旋转，滚动可缩放，点选结构可查看详情。'],
  retry: ['Retry', 'Försök igen', 'Erneut versuchen', 'Reintentar', 'Iterum conare', '重试'],
  loadingSelection: ['Loading anatomy…', 'Laddar anatomi…', 'Anatomie wird geladen…', 'Cargando anatomía…', 'Anatomia oneratur…', '正在加载解剖结构…'],
  selectionError: ['This anatomy could not be loaded. Please try again.', 'Anatomin kunde inte laddas. Försök igen.', 'Diese Anatomie konnte nicht geladen werden. Bitte erneut versuchen.', 'No se pudo cargar esta anatomía. Inténtelo de nuevo.', 'Haec anatomia onerari non potuit. Iterum conare.', '未能加载此结构，请重试。'],
  expandDetails: ['Expand details', 'Utöka detaljer', 'Details erweitern', 'Ampliar detalles', 'Singula amplifica', '展开详情'],
  collapseDetails: ['Collapse details', 'Minska detaljer', 'Details verkleinern', 'Reducir detalles', 'Singula contrahe', '收起详情'],
  toothCount: ['teeth', 'tänder', 'Zähne', 'dientes', 'dentes', '颗牙'],
  meshCount: ['mesh parts', 'modelldelar', 'Modellteile', 'partes del modelo', 'partes formae', '个模型部件'],
  primaryDentition: ['Open primary dentition', 'Visa mjölktandsbett', 'Milchgebiss öffnen', 'Abrir dentición temporal', 'Dentitionem deciduam aperi', '查看乳牙列'],
  showAll: ['Show all', 'Visa alla', 'Alle anzeigen', 'Mostrar todo', 'Omnia ostende', '显示全部'],
  showLess: ['Show fewer', 'Visa färre', 'Weniger anzeigen', 'Mostrar menos', 'Pauciora ostende', '收起部分项目'],
} satisfies Record<string, [string, string, string, string, string, string]>;

export function interfaceText(lang: Lang) {
  const index = LANGS.indexOf(lang);
  return Object.fromEntries(Object.entries(text).map(([key, values]) => [key, values[index]])) as Record<keyof typeof text, string>;
}
