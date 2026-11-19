import type { Lang } from './lang.ts';
type Tr = Record<Exclude<Lang, 'en'>, string>;
export const FEEDBACK_NAMES: Record<string, Tr> = {
  'infraorbital-foramen': { sv: 'Foramen infraorbitale', de: 'Foramen infraorbitale', es: 'Agujero infraorbitario', la: 'Foramen infraorbitale', zh: '眶下孔' },
  'ophthalmic-nerve': { sv: 'Nervus ophthalmicus (V1)', de: 'Nervus ophthalmicus (V1)', es: 'Nervio oftálmico (V1)', la: 'Nervus ophthalmicus (V1)', zh: '眼神经（V1）' },
  'facial-nerve': { sv: 'Nervus facialis (VII)', de: 'Nervus facialis (VII)', es: 'Nervio facial (VII)', la: 'Nervus facialis (VII)', zh: '面神经（Ⅶ）' },
  'glossopharyngeal-nerve': { sv: 'Nervus glossopharyngeus (IX)', de: 'Nervus glossopharyngeus (IX)', es: 'Nervio glosofaríngeo (IX)', la: 'Nervus glossopharyngeus (IX)', zh: '舌咽神经（Ⅸ）' },
  'vagus-nerve': { sv: 'Nervus vagus (X)', de: 'Nervus vagus (X)', es: 'Nervio vago (X)', la: 'Nervus vagus (X)', zh: '迷走神经（Ⅹ）' },
  'hypoglossal-nerve': { sv: 'Nervus hypoglossus (XII)', de: 'Nervus hypoglossus (XII)', es: 'Nervio hipogloso (XII)', la: 'Nervus hypoglossus (XII)', zh: '舌下神经（Ⅻ）' },
  'facial-temporal-branch': { sv: 'N. facialis, temporal grengrupp', de: 'N. facialis, temporale Äste', es: 'Ramas temporales del facial', la: 'Rami temporales nervi facialis', zh: '面神经颞支' },
  'facial-zygomatic-branch': { sv: 'N. facialis, zygomatisk grengrupp', de: 'N. facialis, zygomatische Äste', es: 'Ramas cigomáticas del facial', la: 'Rami zygomatici nervi facialis', zh: '面神经颧支' },
  'facial-buccal-branch': { sv: 'N. facialis, buckal grengrupp', de: 'N. facialis, bukkale Äste', es: 'Ramas bucales del facial', la: 'Rami buccales nervi facialis', zh: '面神经颊支' },
  'facial-marginal-mandibular-branch': { sv: 'N. facialis, marginal mandibulär grengrupp', de: 'N. facialis, marginale mandibuläre Äste', es: 'Ramas marginales mandibulares del facial', la: 'Ramus marginalis mandibularis nervi facialis', zh: '面神经下颌缘支' },
  'facial-cervical-branch': { sv: 'N. facialis, cervikal grengrupp', de: 'N. facialis, zervikale Äste', es: 'Ramas cervicales del facial', la: 'Ramus colli nervi facialis', zh: '面神经颈支' },
  'mandibular-canal': { sv: 'Canalis mandibulae', de: 'Canalis mandibulae', es: 'Conducto mandibular', la: 'Canalis mandibulae', zh: '下颌管' },
  'superior-orbital-fissure': { sv: 'Fissura orbitalis superior', de: 'Fissura orbitalis superior', es: 'Fisura orbitaria superior', la: 'Fissura orbitalis superior', zh: '眶上裂' },
  'foramen-rotundum': { sv: 'Foramen rotundum', de: 'Foramen rotundum', es: 'Agujero redondo', la: 'Foramen rotundum', zh: '圆孔' },
  'foramen-ovale': { sv: 'Foramen ovale', de: 'Foramen ovale', es: 'Agujero oval', la: 'Foramen ovale', zh: '卵圆孔' },
  'stylomastoid-foramen': { sv: 'Foramen stylomastoideum', de: 'Foramen stylomastoideum', es: 'Agujero estilomastoideo', la: 'Foramen stylomastoideum', zh: '茎乳孔' },
  'jugular-foramen': { sv: 'Foramen jugulare', de: 'Foramen jugulare', es: 'Agujero yugular', la: 'Foramen jugulare', zh: '颈静脉孔' },
  'hypoglossal-canal': { sv: 'Canalis nervi hypoglossi', de: 'Canalis nervi hypoglossi', es: 'Conducto hipogloso', la: 'Canalis nervi hypoglossi', zh: '舌下神经管' },
  'articular-eminence': { sv: 'Eminentia articularis', de: 'Eminentia articularis', es: 'Eminencia articular', la: 'Eminentia articularis', zh: '关节结节' },
};
