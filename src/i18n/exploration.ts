import { LANGS, type Lang } from './lang';

const text = {
  nerveGroups: ['Nerve groups', 'Nervgrupper', 'Nervengruppen', 'Grupos nerviosos', 'Greges nervorum', '神经分组'],
  nerveSide: ['Nerve side', 'Nervsida', 'Nervenseite', 'Lado nervioso', 'Latus nervorum', '神经侧别'],
  dental: ['Dental · V2 / V3', 'Dentala · V2 / V3', 'Dental · V2 / V3', 'Dentales · V2 / V3', 'Dentales · V2 / V3', '牙齿相关神经 · V2／V3'],
  trigeminal: ['Trigeminal · V', 'Trigeminus · V', 'Trigeminus · V', 'Trigémino · V', 'Trigeminus · V', '三叉神经 · Ⅴ'],
  facial: ['Facial · VII', 'Facialis · VII', 'Facialis · VII', 'Facial · VII', 'Facialis · VII', '面神经 · Ⅶ'],
  'lower-cranial': ['IX / X / XII', 'IX / X / XII', 'IX / X / XII', 'IX / X / XII', 'IX / X / XII', 'Ⅸ／Ⅹ／Ⅻ'],
  all: ['All nerves', 'Alla nerver', 'Alle Nerven', 'Todos los nervios', 'Omnes nervi', '全部神经'],
  both: ['Both sides', 'Båda sidor', 'Beide Seiten', 'Ambos lados', 'Utrumque latus', '双侧'],
  right: ['Right', 'Höger', 'Rechts', 'Derecho', 'Dexter', '右侧'],
  left: ['Left', 'Vänster', 'Links', 'Izquierdo', 'Sinister', '左侧'],
  nerveHint: ['Start with dental nerves; choose one side or another group to follow fewer paths. Selecting a hidden nerve reveals its group.', 'Börja med dentala nerver; välj en sida eller en annan grupp för färre förlopp. När du väljer en dold nerv visas dess grupp.', 'Beginnen Sie mit dentalen Nerven; wählen Sie eine Seite oder andere Gruppe für weniger Verläufe. Die Auswahl eines ausgeblendeten Nervs zeigt seine Gruppe.', 'Empiece con los nervios dentales; elija un lado u otro grupo para seguir menos trayectos. Seleccionar un nervio oculto muestra su grupo.', 'A nervis dentalibus incipe; unum latus aut alium gregem elige ut pauciores cursus sequaris. Nervum occultum eligere gregem eius ostendit.', '先从牙齿相关神经开始。可选择一侧或切换分组，减少同时显示的走行。选择隐藏的神经会显示其所在分组。'],
  passageActive: ['A single passage is shown. Choose a group below to leave this view.', 'En nervpassage visas. Välj en grupp nedan för att lämna vyn.', 'Ein einzelner Durchtritt wird gezeigt. Wählen Sie unten eine Gruppe, um diese Ansicht zu verlassen.', 'Se muestra un solo trayecto. Elija un grupo abajo para salir de esta vista.', 'Unus transitus ostenditur. Gregem infra elige ut hunc visum relinquas.', '当前仅显示一条神经通道。选择下方任一分组可退出此视图。'],
  hyoidTitle: ['How the hyoid is suspended', 'Så hålls tungbenet på plats', 'Aufhängung des Zungenbeins', 'Cómo se suspende el hioides', 'Suspensio ossis hyoidei', '舌骨如何悬吊'],
  skull: ['From the skull', 'Från skallen', 'Vom Schädel', 'Desde el cráneo', 'A cranio', '来自颅骨'],
  jaw: ['From the jaw', 'Från underkäken', 'Vom Unterkiefer', 'Desde la mandíbula', 'A mandibula', '来自下颌骨'],
  below: ['Below the hyoid', 'Nedanför tungbenet', 'Unter dem Zungenbein', 'Bajo el hioides', 'Infra os hyoideum', '舌骨下方'],
  temporal: ['Temporal bone', 'Tinningben', 'Schläfenbein', 'Temporal', 'Os temporale', '颞骨'],
  mandible: ['Mandible', 'Underkäke', 'Unterkiefer', 'Mandíbula', 'Mandibula', '下颌骨'],
  hyoid: ['Hyoid', 'Tungben', 'Zungenbein', 'Hioides', 'Os hyoideum', '舌骨'],
  neck: ['Larynx · sternum · scapula', 'Struphuvud · bröstben · skulderblad', 'Kehlkopf · Brustbein · Schulterblatt', 'Laringe · esternón · escápula', 'Larynx · sternum · scapula', '喉 · 胸骨 · 肩胛骨'],
  hyoidNote: ['Schematic attachment diagram, not a bony joint. Solid lines represent muscle connections; the dashed line represents the stylohyoid ligament. These attachments are explained here rather than modeled as 3D meshes.', 'Schematisk bild av fästen, ingen benled. Heldragna linjer visar muskelförbindelser; den streckade visar lig. stylohyoideum. Fästena förklaras här och är inte modellerade som 3D-meshar.', 'Schematische Ansatzdarstellung, kein Knochengelenk. Durchgezogene Linien zeigen Muskelverbindungen, die gestrichelte das Stylohyoidband. Die Ansätze werden hier erklärt und sind keine 3D-Meshes.', 'Esquema de inserciones, no una articulación ósea. Las líneas continuas representan conexiones musculares; la discontinua, el ligamento estilohioideo. Se explican aquí y no se modelan como mallas 3D.', 'Schema insertionum, non articulatio ossea. Lineae continuae nexus musculares et linea interrupta ligamentum stylohyoideum demonstrant. Insertiones hic explicantur, non ut formae tridimensionales finguntur.', '本图示意附着关系，并非骨性关节。实线表示肌肉连接，虚线表示茎突舌骨韧带。这些附着结构仅作图文说明，未建成三维网格。'],
} satisfies Record<string, [string, string, string, string, string, string]>;

export function explorationText(lang: Lang) {
  const i = LANGS.indexOf(lang);
  return Object.fromEntries(Object.entries(text).map(([key, values]) => [key, values[i]])) as Record<keyof typeof text, string>;
}
