import {grammarChapters} from '@/lib/grammar/chapterRegistry'
import ResultDetail from './ResultDetail'
import './detail.css'

export default async function StudentResultsPage({params}:{params:Promise<{id:string}>}){
 const {id}=await params
 // Métadonnées publiques uniquement : pas de questions, de réponses ou de corrigés.
 const catalog=grammarChapters.map(c=>({id:c.id,number:c.number,level:c.level,title:c.title.de,subtitle:{fr:c.subtitle.fr,de:c.subtitle.de,ar:c.subtitle.ar},sets:c.exerciseSets.map(s=>({id:s.id,category:s.category,position:s.position,title:s.title.de}))})).sort((a,b)=>a.number-b.number)
 return <ResultDetail key={id} id={id} catalog={catalog}/>
}
