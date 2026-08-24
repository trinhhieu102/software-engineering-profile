import React from "react";

// Official Exact Standard SVG Brand Vectors for Technologies

export function NextjsLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <mask height="180" id="mask0_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask="url(#mask0_next)">
        <circle cx="90" cy="90" data-theme="dark" fill="black" r="90" stroke="white" strokeWidth="6" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0_linear_next)"
        />
        <rect fill="url(#paint1_linear_next)" height="72" width="12" x="115" y="54" />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_next"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_next"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ReactLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="16" fill="#3178c6" />
      <path
        fill="#ffffff"
        d="M68.5 78.2c2.1 3.4 5.3 5.3 9.4 5.3 4.2 0 6.9-2 6.9-5.1 0-3.3-2.6-4.6-7.5-6.6l-2.6-1.1c-7.2-2.9-10.7-6.9-10.7-13.4 0-8.8 6.9-14.8 17.5-14.8 7.3 0 12.8 2.3 16.5 6.9l-5.6 5.5c-2.3-3.1-5.6-4.7-9.9-4.7-5 0-7.8 2.3-7.8 5 0 2.8 2.2 4.1 6.5 5.9l2.6 1.1c8.4 3.5 11.9 7.4 11.9 14.1 0 9.8-7.3 15.6-18.4 15.6-8.7 0-14.9-2.9-19-8.4l6.2-5.3zM25 43.8h34.3v7.7H46.1v45.1H37.3V51.5H25v-7.7z"
      />
    </svg>
  );
}

export function GoLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#00ADD8"
        d="M33.6 54.3c-2.1-.8-4.4-1.2-6.8-1.2-8.8 0-16.1 5.9-18.1 14.1-.7 2.7-.8 5-.4 7.2 1.6 7.4 8.1 13.1 15.9 13.6 2.7.2 5.5-.3 7.8-1.4 3.3-1.6 5.9-4.3 7.4-7.7.8-1.9 1.3-4 1.4-6.3h-17.7v-7.4h25.8c.2 1.6.3 3.3.3 5 0 5.6-1.5 10.9-4.2 15.4-3.7 6.1-9.4 10.7-16.3 12.8-3.4 1-7 1.4-10.7 1.1-6.7-.4-12.7-3.3-17.2-7.8-4.9-4.8-7.8-11.4-8-18.5-.2-6.5 2-12.8 6.1-17.7 5.2-6.4 13-10.4 21.6-10.5 4.8 0 9.4 1.2 13.5 3.3l-3.8 6.4zM92.7 39.5c15.8 0 28.6 12.8 28.6 28.6S108.5 96.7 92.7 96.7c-15.8 0-28.6-12.8-28.6-28.6s12.8-28.6 28.6-28.6zm0 8c-11.4 0-20.6 9.2-20.6 20.6s9.2 20.6 20.6 20.6 20.6-9.2 20.6-20.6-9.2-20.6-20.6-20.6z"
      />
    </svg>
  );
}

export function PythonLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#3776AB"
        d="M63.4 11.5c-15.2 0-25 6.7-25 19.3v10h25.7v3.6H26.3c-12.6 0-23.7 7.7-23.7 22.3 0 14.7 10.2 23 22.8 23h7.3v-10.8c0-12.8 11.1-23.9 24-23.9h24.7v-24.2c0-11.9-10.2-19.3-28-19.3zm-13.8 7.3c2.5 0 4.6 2.1 4.6 4.6 0 2.5-2.1 4.6-4.6 4.6s-4.6-2.1-4.6-4.6c0-2.5 2.1-4.6 4.6-4.6z"
      />
      <path
        fill="#FFD43B"
        d="M64.6 116.5c15.2 0 25-6.7 25-19.3v-10H63.9v-3.6h37.8c12.6 0 23.7-7.7 23.7-22.3 0-14.7-10.2-23-22.8-23h-7.3v10.8c0 12.8-11.1 23.9-24 23.9H46.6v24.2c0 11.9 10.2 19.3 28 19.3zm13.8-7.3c-2.5 0-4.6-2.1-4.6-4.6 0-2.5 2.1-4.6 4.6-4.6s4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"
      />
    </svg>
  );
}

export function PostgreSQLLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#4169E1"
        d="M64.4 12c-28.7 0-52 23.3-52 52 0 20.9 12.4 39 30.2 47.3.3-2.6.9-6 1.4-8.8-4.9-1.9-9.5-4.8-13.2-8.6 1.8-1.5 5.5-2.9 8.2-3.8-2.6-7.8-3.4-16.5-2.2-25.1 4.3 1.3 9.4 3.7 13.1 6.5 1.5-6 4.6-11.5 9-15.8 4.4-4.3 10-7.2 16.1-8.3 1.6-4.1 4.2-7.7 7.7-10.2 4.1-3 9.2-4.6 14.3-4.7 1.8 1.8 3.2 4 4.1 6.4 7.2 3.1 13 8.6 16.3 15.6 3.7 7.7 4.2 16.6 1.5 24.8 2.7.9 6.4 2.3 8.2 3.8-3.7 3.8-8.3 6.7-13.2 8.6.5 2.8 1.1 6.2 1.4 8.8 17.8-8.3 30.2-26.4 30.2-47.3 0-28.7-23.3-52-52.9-52.1z"
      />
    </svg>
  );
}

export function RedisLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#DC382D"
        d="M117.8 80.5l-50.6 29.2c-2 1.2-4.4 1.2-6.4 0L10.2 80.5c-2-1.2-3.2-3.3-3.2-5.6V39.1c0-2.3 1.2-4.4 3.2-5.6L60.8 4.3c2-1.2 4.4-1.2 6.4 0l50.6 29.2c2 1.2 3.2 3.3 3.2 5.6v35.8c0 2.3-1.2 4.4-3.2 5.6z"
      />
      <path
        fill="#ffffff"
        opacity="0.25"
        d="M64 12.3L17.7 39.1 64 65.8l46.3-26.7L64 12.3z"
      />
      <circle cx="64" cy="64" r="10" fill="#ffffff" />
    </svg>
  );
}

export function DockerLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#2496ED"
        d="M123.6 57.5c-1.8-1.3-4.8-1.8-8.2-1.4-.8-6.1-4.7-11.5-10.4-14.5l-3.3-1.8-1.9 3.2c-3.1 5.2-3.8 11.5-2.1 17.3-3.2 1.8-8.2 2.6-13.8 2.6H6.7C3 62.9 0 66 0 69.8c.8 15.3 7.9 29.6 19.6 39.4 11.2 9.4 25.8 14.8 40.8 14.8 38.6 0 70.8-24.9 76.5-62.4 1.1-.3 4.8-1.5 6.7-4.1zm-48.4-5.2h10.9v10.9H75.2V52.3zm0-13.6h10.9v10.9H75.2V38.7zm-13.6 13.6h10.9v10.9H61.6V52.3zm0-13.6h10.9v10.9H61.6V38.7zm-13.6 13.6h10.9v10.9H48V52.3zm0-13.6h10.9v10.9H48V38.7zm0-13.6h10.9v10.9H48V25.1zm-13.6 27.2h10.9v10.9H34.4V52.3zm0-13.6h10.9v10.9H34.4V38.7zm-13.6 13.6h10.9v10.9H20.8V52.3z"
      />
    </svg>
  );
}

export function ThreejsLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#ffffff" d="M64 16L16 112h96L64 16zm0 28.5L88.2 96H39.8L64 44.5z" />
    </svg>
  );
}

export function GsapLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="20" fill="#0ae448" />
      <path
        fill="#000000"
        d="M98 64c0 18.8-15.2 34-34 34S30 82.8 30 64s15.2-34 34-34c9.8 0 18.7 4.2 24.9 10.9L76.5 52C73.3 47.7 68.9 45 64 45c-10.5 0-19 8.5-19 19s8.5 19 19 19c7.6 0 14.1-4.4 17.2-10.8H64V60h33.8c.1 1.3.2 2.6.2 4z"
      />
    </svg>
  );
}

export function KafkaLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#ffffff"
        d="M64 12c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52zm18 78.4l-15.8-16.1v16.1H54.4V37.6h11.8v26.4L81.2 37.6h15.2L74.8 62.4 97.6 90.4H82z"
      />
    </svg>
  );
}

export function GraphQLLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#E10098"
        d="M64 12.5L19.4 38.2v51.6L64 115.5l44.6-25.7V38.2L64 12.5zm0 9.8l36.1 20.8v41.6L64 105.5 27.9 84.7V43.1L64 22.3zm0 18.3L37.8 79.8h52.4L64 40.6z"
      />
    </svg>
  );
}

export function TailwindLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#38BDF8"
        d="M64 36c-16 0-26 8-30 24 6-8 13-11 21-9 4.6 1.1 7.8 4.4 11.5 8.1C72.5 65.2 80 72 96 72c16 0 26-8 30-24-6 8-13 11-21 9-4.6-1.1-7.8-4.4-11.5-8.1C87.5 42.8 80 36 64 36zM34 68c-16 0-26 8-30 24 6-8 13-11 21-9 4.6 1.1 7.8 4.4 11.5 8.1C42.5 97.2 50 104 66 104c16 0 26-8 30-24-6 8-13 11-21 9-4.6-1.1-7.8-4.4-11.5-8.1C57.5 74.8 50 68 34 68z"
      />
    </svg>
  );
}

export function GitLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#F05032"
        d="M123.6 57.5L70.5 4.4c-3.9-3.9-10.2-3.9-14.1 0L42.2 18.6l17.8 17.8c4.2-1.4 9.1-.5 12.5 2.9 3.4 3.4 4.3 8.3 2.9 12.5l17.2 17.2c4.2-1.4 9.1-.5 12.5 2.9 4.7 4.7 4.7 12.3 0 17-4.7 4.7-12.3 4.7-17 0-3.6-3.6-4.4-8.8-2.6-13.1L66.7 57v29.5c2.4 1.2 4.5 3.1 5.9 5.6 3.8 6.5 1.6 14.8-4.9 18.6s-14.8 1.6-18.6-4.9c-3.8-6.5-1.6-14.8 4.9-18.6 2.5-1.5 5.4-2.1 8.2-1.9V56.2c-2.8.2-5.7-.4-8.2-1.9-4.3-2.5-6.8-7-6.8-11.9 0-1.7.3-3.4 1-5L29.9 19.9 4.4 45.4c-3.9 3.9-3.9 10.2 0 14.1l53.1 53.1c3.9 3.9 10.2 3.9 14.1 0l52-52c3.9-3.9 3.9-10.2 0-14.1z"
      />
    </svg>
  );
}

export function LinuxLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#FCC624"
        d="M64 12c-15.5 0-28 12.5-28 28v20c0 15.5 12.5 28 28 28s28-12.5 28-28V40c0-15.5-12.5-28-28-28z"
      />
      <circle cx="52" cy="36" r="4" fill="#000000" />
      <circle cx="76" cy="36" r="4" fill="#000000" />
      <path fill="#FFA500" d="M64 44l-8 12h16l-8-12z" />
      <path
        fill="#000000"
        d="M36 60c-6.6 0-12 5.4-12 12v16c0 6.6 5.4 12 12 12s12-5.4 12-12V72c0-6.6-5.4-12-12-12zm56 0c-6.6 0-12 5.4-12 12v16c0 6.6 5.4 12 12 12s12-5.4 12-12V72c0-6.6-5.4-12-12-12z"
      />
      <ellipse cx="44" cy="112" rx="16" ry="6" fill="#FFA500" />
      <ellipse cx="84" cy="112" rx="16" ry="6" fill="#FFA500" />
    </svg>
  );
}

export function CEFRLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="56" fill="#10B981" />
      <text
        x="64"
        y="74"
        fill="#ffffff"
        fontSize="34"
        fontWeight="bold"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        B2
      </text>
    </svg>
  );
}
