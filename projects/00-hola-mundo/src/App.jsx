import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard isFollowing userName="fundacioncalma2">
                Ministerio de Salud
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} userName="MTPE_Peru">
                Ministerio de Trabajo
            </TwitterFollowCard>
        </section>
    )
}