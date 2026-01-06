import { useState } from 'react'
import branches from '../data/branchesData'
import '../styles/indonesia-map.css'

import IndonesiaSVG from '../assets/map-indonesia.svg'

export default function IndonesiaMapSection() {
  const [activeBranch, setActiveBranch] = useState(null)

  return (
    <section className="map-section">
      <div className="map-container">

        {/* MAP */}
        <div className="map-wrapper">
            <svg
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
            className="indonesia-map"
            >
            <image
            href={IndonesiaSVG}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            />

            {branches.map(branch => (
            <g
                key={branch.id}
                className={`
                map-marker
                ${branch.isHQ ? 'hq' : ''}
                ${activeBranch?.id === branch.id ? 'active' : ''}
                `}
                transform={`translate(${branch.x}, ${branch.y})`}
                onClick={() => setActiveBranch(branch)}
            >
                {/* MAIN DOT */}
                <circle r="6" />

                {/* PULSE */}
                <circle r="14" className="pulse" />
            </g>
            ))}
          </svg>
        </div>

        {/* INFO PANEL */}
        <div className="map-info">

        {/* === LIST MODE (DEFAULT) === */}
        {!activeBranch && (
            <>
            <h3 className="map-list-title">Lokasi Kantor</h3>
            <p className="map-list-hint">
                Klik pada daftar atau titik di peta untuk melihat detail cabang
            </p>

            <ul className="branch-list">
                {branches.map(branch => (
                <li
                    key={branch.id}
                    className={`branch-item ${branch.isHQ ? 'hq' : ''}`}
                    onClick={() => setActiveBranch(branch)}
                >
                    <div className="branch-dot" />
                    <div>
                    <strong>{branch.city}</strong>
                    <span>{branch.type}</span>
                    </div>
                </li>
                ))}
            </ul>
            </>
        )}

        {/* === DETAIL MODE === */}
        {activeBranch && (
            <>
            <div className="map-info-header">
                <h3>{activeBranch.city}</h3>
                <span className="badge">{activeBranch.type}</span>
            </div>

            <p className="address">{activeBranch.address}</p>

            <ul className="contact">
                <li><strong>Telp:</strong> {activeBranch.phone}</li>
                {activeBranch.email && (
                <li><strong>Email:</strong> {activeBranch.email}</li>
                )}
            </ul>

            <div className="map-actions">
            <a
                className="btn-map"
                href={activeBranch.mapsUrl}
                target="_blank"
                rel="noreferrer"
            >
                Lihat di Google Maps
            </a>

            <button
                className="btn-back"
                onClick={() => setActiveBranch(null)}
            >
                Kembali ke daftar cabang
            </button>
            </div>

            </>
        )}

        </div>
      </div>
    </section>
  )
}
