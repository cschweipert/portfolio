import React from 'react'
import {
  SiPython,
  SiPostgresql,
  SiDbt,
  SiSnowflake,
  SiDuckdb,
  SiTimescale,
  SiApacheparquet,
  SiPandas,
  SiPolars,
  SiNumpy,
  SiSqlalchemy,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiDocker,
  SiGrafana,
  SiPrometheus,
  SiAmazonwebservices,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPlotly,
  SiRubyonrails,
  SiGithub,
  SiGoogleearthengine,
  SiArcgis,
  SiLeaflet,
  SiOpenlayers
} from 'react-icons/si'

export default function Toolbelt() {
  const technologies = [
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiDbt, name: 'dbt', color: '#FF694A' },
    { icon: SiSnowflake, name: 'Snowflake', color: '#29B5E8' },
    { icon: SiDuckdb, name: 'DuckDB', color: '#C9A700' },
    { icon: SiTimescale, name: 'TimescaleDB', color: '#FDB515' },
    { icon: SiApacheparquet, name: 'Parquet', color: '#50ABF1' },
    { icon: SiPandas, name: 'Pandas', color: '#150458' },
    { icon: SiPolars, name: 'Polars', color: '#CD792C' },
    { icon: SiNumpy, name: 'NumPy', color: '#013243' },
    { icon: SiSqlalchemy, name: 'SQLAlchemy', color: '#D71F00' },
    { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
    { icon: SiFlask, name: 'Flask', color: '#000000' },
    { icon: SiDjango, name: 'Django', color: '#092E20' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiGrafana, name: 'Grafana', color: '#F46800' },
    { icon: SiPrometheus, name: 'Prometheus', color: '#E6522C' },
    { icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiPlotly, name: 'Plotly / Dash', color: '#3F4F75' },
    { icon: SiRubyonrails, name: 'Ruby on Rails', color: '#CC0000' },
    { icon: SiGithub, name: 'GitHub', color: '#181717' },
    { icon: SiGoogleearthengine, name: 'Google Earth Engine', color: '#34A853' },
    { icon: SiArcgis, name: 'ArcGIS', color: '#0079C1' },
    { icon: SiLeaflet, name: 'Leaflet', color: '#199900' },
    { icon: SiOpenlayers, name: 'OpenLayers', color: '#1F6B75' },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-6">
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="mb-3 p-2">
                <IconComponent
                  size={40}
                  style={{ color: tech.color }}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                {tech.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}