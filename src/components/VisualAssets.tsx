import React from 'react';

// Storefront Architectural Showcase
export const StorefrontIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1200 680"
    className={`w-full h-auto select-none ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Joe's Coffee storefront with warm wooden interior and service counter"
  >
    <defs>
      {/* Wall & Building Gradients */}
      <linearGradient id="stuccoWall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F4F0E8" />
        <stop offset="100%" stopColor="#E8E2D6" />
      </linearGradient>
      <linearGradient id="interiorGlow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#D98A44" />
        <stop offset="50%" stopColor="#C4732E" />
        <stop offset="100%" stopColor="#9E531D" />
      </linearGradient>
      <linearGradient id="woodSlats" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#C67D3E" />
        <stop offset="100%" stopColor="#A86128" />
      </linearGradient>
      <linearGradient id="counterWood" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#DF9C5E" />
        <stop offset="100%" stopColor="#B67035" />
      </linearGradient>
      <linearGradient id="chromeMetal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5F5F5" />
        <stop offset="50%" stopColor="#D0D0D0" />
        <stop offset="100%" stopColor="#9E9E9E" />
      </linearGradient>
      <linearGradient id="glassReflection" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
        <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#8AC6D1" stopOpacity="0.15" />
      </linearGradient>
      <radialGradient id="ceilingLight" cx="0.5" cy="0" r="0.8">
        <stop offset="0%" stopColor="#FFF1D0" stopOpacity="0.9" />
        <stop offset="60%" stopColor="#FFA640" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FFA640" stopOpacity="0" />
      </radialGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%">
        <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#23150F" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Outer Clean Stucco Facade */}
    <rect width="1200" height="680" fill="url(#stuccoWall)" rx="16" />

    {/* Facade Coping / Top Trim */}
    <rect x="0" y="0" width="1200" height="32" fill="#D8CFBF" />
    <line x1="0" y1="32" x2="1200" y2="32" stroke="#BFB4A0" strokeWidth="2" />

    {/* Subtle Architectural Seams */}
    <line x1="180" y1="32" x2="180" y2="680" stroke="#DDD4C4" strokeWidth="1" strokeDasharray="6 4" />
    <line x1="1020" y1="32" x2="1020" y2="680" stroke="#DDD4C4" strokeWidth="1" strokeDasharray="6 4" />

    {/* Wall Mounted Blue Box / Lantern on Left (as in video) */}
    <g transform="translate(110, 190)">
      <rect x="0" y="0" width="110" height="90" rx="8" fill="#5F88A3" />
      <rect x="10" y="10" width="90" height="70" rx="4" fill="#3D647E" />
      <circle cx="55" cy="45" r="22" fill="#88B8D6" opacity="0.4" />
      <path d="M45 45h20M55 35v20" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <rect x="25" y="90" width="60" height="6" fill="#2D495B" rx="2" />
    </g>

    {/* Main Counter Window Recess / Frame */}
    <g filter="url(#shadow)">
      {/* Outer Window Architrave / Frame */}
      <rect x="260" y="110" width="700" height="460" rx="14" fill="#E2DAC9" />
      <rect x="268" y="118" width="684" height="444" rx="10" fill="#2E1C12" />

      {/* Interior Warm Wooden Slats & Amber Glow */}
      <rect x="274" y="124" width="672" height="432" rx="8" fill="url(#interiorGlow)" />

      {/* Vertical Slat Pattern */}
      {Array.from({ length: 42 }).map((_, i) => (
        <rect
          key={i}
          x={278 + i * 16}
          y="124"
          width="10"
          height="432"
          fill="#8A4613"
          opacity={0.35 + (i % 2) * 0.15}
        />
      ))}

      {/* Warm Ambient Ceiling Illumination */}
      <ellipse cx="610" cy="124" rx="280" ry="160" fill="url(#ceilingLight)" />

      {/* Top Interior Sign "Joe's Coffee" above Counter Window */}
      <text
        x="610"
        y="195"
        textAnchor="middle"
        fontFamily="'Caveat', cursive"
        fontSize="44"
        fontWeight="700"
        fill="#FAF3E6"
        filter="url(#softGlow)"
        letterSpacing="2"
      >
        Joe&apos;s Coffee
      </text>

      {/* Rear Shelving with Warm Items & Coffee Beans */}
      <rect x="740" y="220" width="180" height="8" rx="2" fill="#583116" />
      <rect x="740" y="270" width="180" height="8" rx="2" fill="#583116" />

      {/* Ceramic Jars and Cups on Shelf */}
      <rect x="755" y="196" width="22" height="24" rx="4" fill="#F8EEDD" />
      <rect x="785" y="190" width="26" height="30" rx="4" fill="#4B776A" />
      <rect x="820" y="194" width="24" height="26" rx="4" fill="#DF8E57" />
      <rect x="855" y="198" width="20" height="22" rx="3" fill="#FAF3E6" />

      <rect x="760" y="246" width="32" height="24" rx="4" fill="#C99B6A" />
      <rect x="805" y="242" width="28" height="28" rx="4" fill="#F0E5D4" />
      <rect x="845" y="248" width="30" height="22" rx="4" fill="#698579" />

      {/* Left Wall Espresso Machine Setup */}
      <g transform="translate(320, 250)">
        <rect x="0" y="40" width="140" height="90" rx="6" fill="url(#chromeMetal)" />
        <rect x="15" y="25" width="40" height="20" rx="4" fill="#555" />
        <rect x="85" y="25" width="40" height="20" rx="4" fill="#555" />
        {/* Dual Group Heads */}
        <path d="M30 60v35M40 60v35M100 60v35M110 60v35" stroke="#222" strokeWidth="4" />
        {/* Steam Wand */}
        <path d="M135 65l18 30" stroke="#E0E0E0" strokeWidth="4" strokeLinecap="round" />
        <circle cx="70" cy="55" r="8" fill="#333" />
        {/* Two Espresso Cups on Tray */}
        <rect x="25" y="100" width="18" height="15" rx="3" fill="#FFF" />
        <rect x="95" y="100" width="18" height="15" rx="3" fill="#FFF" />
      </g>

      {/* Main Front Service Counter */}
      <rect x="274" y="375" width="672" height="181" rx="4" fill="url(#counterWood)" />
      {/* Counter Top Slab */}
      <rect x="264" y="365" width="692" height="20" rx="4" fill="#FAF5ED" />
      <line x1="264" y1="385" x2="956" y2="385" stroke="#C9B6A0" strokeWidth="2" />

      {/* Glass Pastry Showcase in Counter Window (Right side) */}
      <g transform="translate(620, 290)">
        <rect x="0" y="0" width="280" height="85" rx="6" fill="#1C140E" opacity="0.8" />
        {/* Glass Box */}
        <rect x="4" y="4" width="272" height="77" rx="4" fill="url(#glassReflection)" stroke="#FFF" strokeWidth="1.5" strokeOpacity="0.4" />
        {/* Glass Shelf */}
        <line x1="10" y1="45" x2="270" y2="45" stroke="#FFF" strokeWidth="2" strokeOpacity="0.6" />
        {/* Baked Goods inside Case */}
        {/* Croissants top shelf */}
        <ellipse cx="45" cy="35" rx="18" ry="9" fill="#DE943F" />
        <ellipse cx="95" cy="35" rx="18" ry="9" fill="#C97B28" />
        <ellipse cx="145" cy="35" rx="18" ry="9" fill="#DE943F" />
        <ellipse cx="195" cy="35" rx="18" ry="9" fill="#D38833" />
        <ellipse cx="245" cy="35" rx="16" ry="8" fill="#C97B28" />
        {/* Pastries bottom shelf */}
        <circle cx="50" cy="65" r="10" fill="#9C5221" />
        <circle cx="100" cy="65" r="11" fill="#BA7A36" />
        <circle cx="150" cy="65" r="10" fill="#854117" />
        <circle cx="200" cy="65" r="11" fill="#DE943F" />
        <circle cx="245" cy="65" r="10" fill="#B06A26" />
      </g>

      {/* POS Terminal & Menu Board on Counter */}
      <g transform="translate(530, 315)">
        <rect x="15" y="0" width="38" height="52" rx="4" fill="#222" />
        <rect x="20" y="5" width="28" height="34" rx="2" fill="#E8EEF5" />
        <rect x="26" y="52" width="16" height="14" fill="#333" />
        <ellipse cx="34" cy="66" rx="14" ry="4" fill="#444" />
      </g>

      {/* Takeaway Cups and Napkin Dispenser on Counter */}
      <g transform="translate(470, 320)">
        <path d="M5 25l4 25h16l4-25z" fill="#FFF8EE" stroke="#E2DAC9" strokeWidth="1" />
        <ellipse cx="17" cy="25" rx="10" ry="3" fill="#24140E" />
        <path d="M32 20l4 30h18l4-30z" fill="#FFF8EE" stroke="#E2DAC9" strokeWidth="1" />
        <ellipse cx="45" cy="20" rx="11" ry="3" fill="#24140E" />
      </g>

      {/* Hanging Glass Reflection diagonal over the entire window */}
      <polygon points="268,118 420,118 310,562 268,562" fill="#FFF" opacity="0.06" />
      <polygon points="560,118 700,118 460,562 380,562" fill="#FFF" opacity="0.04" />
    </g>

    {/* Right Side Potted Plant (Fiddle Leaf / Olive) */}
    <g transform="translate(980, 420)">
      {/* Terracotta Pot */}
      <path d="M40 160l10 80h60l10-80z" fill="#C86A45" />
      <ellipse cx="80" cy="160" rx="42" ry="10" fill="#964627" />
      {/* Stems */}
      <path d="M80 160Q85 100 70 40" stroke="#4A6B3A" strokeWidth="6" strokeLinecap="round" />
      <path d="M78 120Q110 80 120 45" stroke="#4A6B3A" strokeWidth="5" strokeLinecap="round" />
      {/* Lush Leaves */}
      <ellipse cx="65" cy="40" rx="24" ry="16" fill="#3E6B34" transform="rotate(-20 65 40)" />
      <ellipse cx="120" cy="45" rx="26" ry="18" fill="#4C7F40" transform="rotate(30 120 45)" />
      <ellipse cx="60" cy="85" rx="22" ry="14" fill="#5A914C" transform="rotate(-35 60 85)" />
      <ellipse cx="105" cy="95" rx="25" ry="16" fill="#3E6B34" transform="rotate(15 105 95)" />
      <ellipse cx="75" cy="130" rx="20" ry="12" fill="#4C7F40" transform="rotate(-15 75 130)" />
    </g>

    {/* Ground / Pavement Threshold */}
    <rect x="0" y="650" width="1200" height="30" fill="#C4B9A7" />
    <line x1="0" y1="650" x2="1200" y2="650" stroke="#AFA390" strokeWidth="2" />
  </svg>
);

// Drink / Menu Item SVG Illustrations
export const DrinkIllustration: React.FC<{
  type: string;
  className?: string;
}> = ({ type, className = 'w-full h-full' }) => {
  switch (type) {
    case 'espresso':
      return (
        <svg viewBox="0 0 300 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" fill="#F4EFEA" />
          {/* Ceramic Saucer */}
          <ellipse cx="150" cy="195" rx="80" ry="20" fill="#E6DED5" />
          <ellipse cx="150" cy="193" rx="72" ry="16" fill="#FAF7F2" stroke="#D3C7B9" strokeWidth="1.5" />
          {/* Glass Demitasse */}
          <path d="M115 120q0 60 35 60t35-60z" fill="#FFF" fillOpacity="0.4" stroke="#D0C4B4" strokeWidth="2" />
          {/* Rich Espresso & Golden Crema */}
          <path d="M120 135q0 45 30 45t30-45z" fill="#23130B" />
          <ellipse cx="150" cy="135" rx="27" ry="8" fill="#C87A3E" />
          <ellipse cx="147" cy="134" rx="18" ry="5" fill="#E2A669" />
          {/* Handle */}
          <path d="M182 135c18 0 18 30 0 30" stroke="#E6DED5" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Crema Swirls */}
          <circle cx="142" cy="134" r="2" fill="#FFF" opacity="0.6" />
          <circle cx="156" cy="135" r="1.5" fill="#FFF" opacity="0.5" />
        </svg>
      );

    case 'latte':
      return (
        <svg viewBox="0 0 300 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" fill="#F4EFEA" />
          {/* Wide Artisan Cup Top View */}
          <circle cx="150" cy="120" r="75" fill="#EAE2D8" />
          <circle cx="150" cy="120" r="66" fill="#FDFBF7" stroke="#D8CABE" strokeWidth="2" />
          {/* Coffee Crema Surface */}
          <circle cx="150" cy="120" r="58" fill="#B36B39" />
          {/* Delicate Rosetta Latte Art */}
          <g fill="#FFF9F0">
            <path d="M150 78q4 16 0 24q-4-8 0-24z" />
            <path d="M150 92c-15-4-20 6-3 10c-15 0-18 10 0 12c-16 4-15 14 3 14c-14 8-10 16 0 16" stroke="#FFF9F0" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M150 92c15-4 20 6 3 10c15 0 18 10 0 12c16 4 15 14-3 14c14 8 10 16 0 16" stroke="#FFF9F0" strokeWidth="3" strokeLinecap="round" fill="none" />
            <line x1="150" y1="80" x2="150" y2="162" stroke="#FFF9F0" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="150" cy="164" r="3.5" />
          </g>
        </svg>
      );

    case 'cold_brew':
      return (
        <svg viewBox="0 0 300 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" fill="#F4EFEA" />
          {/* Tall Ribbed Glass */}
          <path d="M110 50l12 145h56l12-145z" fill="#FFF" fillOpacity="0.3" stroke="#D0C4B4" strokeWidth="2" />
          {/* Deep Dark Amber Cold Brew */}
          <path d="M112 70l10 123h56l10-123z" fill="#1C0E07" />
          {/* Ice Cubes */}
          <rect x="130" y="80" width="35" height="35" rx="5" fill="#FFF" fillOpacity="0.6" stroke="#C4D7E5" strokeWidth="1.5" />
          <rect x="140" y="120" width="32" height="32" rx="4" fill="#FFF" fillOpacity="0.5" stroke="#C4D7E5" strokeWidth="1.5" />
          <rect x="124" y="125" width="28" height="28" rx="4" fill="#FFF" fillOpacity="0.4" stroke="#C4D7E5" strokeWidth="1.5" />
          {/* Condensation Drops */}
          <circle cx="118" cy="110" r="1.5" fill="#FFF" opacity="0.8" />
          <circle cx="120" cy="140" r="2" fill="#FFF" opacity="0.7" />
          <circle cx="178" cy="125" r="1.5" fill="#FFF" opacity="0.8" />
          {/* Glass Rim */}
          <ellipse cx="150" cy="50" rx="40" ry="7" fill="#FDFBF8" stroke="#D0C4B4" strokeWidth="2" />
        </svg>
      );

    case 'cappuccino':
      return (
        <svg viewBox="0 0 300 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" fill="#F4EFEA" />
          {/* Ceramic Cup */}
          <ellipse cx="150" cy="190" rx="75" ry="18" fill="#E6DED5" />
          <path d="M95 110q0 70 55 70t55-70z" fill="#FAF7F2" stroke="#D3C7B9" strokeWidth="2" />
          {/* Dense Pillowy Foam Top with Cocoa Dust */}
          <ellipse cx="150" cy="110" rx="52" ry="18" fill="#FFFBF5" stroke="#D8CEBF" strokeWidth="1" />
          {/* Cinnamon / Cocoa Powder Dusting */}
          <g fill="#7A401D" opacity="0.85">
            <circle cx="140" cy="110" r="3" />
            <circle cx="155" cy="108" r="2.5" />
            <circle cx="148" cy="115" r="2.8" />
            <circle cx="135" cy="105" r="1.8" />
            <circle cx="162" cy="112" r="2" />
            <circle cx="150" cy="105" r="2.2" />
          </g>
          <path d="M205 125c18 0 18 30 0 30" stroke="#E6DED5" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'matcha':
      return (
        <svg viewBox="0 0 300 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" fill="#F4EFEA" />
          {/* Tall Glass */}
          <path d="M112 55l10 140h56l10-140z" fill="#FFF" fillOpacity="0.4" stroke="#D0C4B4" strokeWidth="2" />
          {/* Milk Layer at Bottom */}
          <path d="M120 150l2 43h56l2-43z" fill="#FFFDF8" />
          {/* Vibrant Green Ceremonial Matcha Swirl */}
          <path d="M114 70l6 82h60l6-82z" fill="#5E8C43" />
          {/* Gradient Blend Zone */}
          <ellipse cx="150" cy="148" rx="29" ry="8" fill="#93B878" opacity="0.8" />
          {/* Floating Ice */}
          <rect x="132" y="80" width="34" height="34" rx="4" fill="#FFF" fillOpacity="0.6" />
          <rect x="138" y="115" width="28" height="28" rx="4" fill="#FFF" fillOpacity="0.5" />
          {/* Glass Rim */}
          <ellipse cx="150" cy="55" rx="38" ry="7" fill="#FDFBF8" stroke="#D0C4B4" strokeWidth="2" />
        </svg>
      );

    case 'mocha':
      return (
        <svg viewBox="0 0 300 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" fill="#F4EFEA" />
          {/* Glass Mug */}
          <path d="M105 75l8 115h74l8-115z" fill="#FFF" fillOpacity="0.3" stroke="#D0C4B4" strokeWidth="2" />
          {/* Dark Chocolate Base */}
          <path d="M112 165l2 24h72l2-24z" fill="#2E180E" />
          {/* Espresso & Milk Layer */}
          <path d="M108 95l4 70h76l4-70z" fill="#6A3B22" />
          {/* Whipped Cream Top */}
          <path d="M110 75q40-30 80 0z" fill="#FFFDF8" />
          <path d="M130 55q20-20 40 10" fill="#FFFDF8" />
          {/* Chocolate Drizzle */}
          <path d="M125 65q25 15 50-5" stroke="#381D10" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M195 95c18 0 18 50 0 50" stroke="#D0C4B4" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'croissant':
      return (
        <svg viewBox="0 0 300 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" fill="#F4EFEA" />
          {/* Baker Parchment Paper */}
          <path d="M50 170l200-20l-10 60l-190-10z" fill="#E6D7C2" opacity="0.6" />
          {/* Crescent Golden Flaky Pastry */}
          <g transform="translate(150, 120)">
            <ellipse cx="0" cy="10" rx="90" ry="42" fill="#D48632" />
            <ellipse cx="0" cy="5" rx="80" ry="36" fill="#E29E4D" />
            {/* Laminated Dough Ridges / Rolls */}
            <path d="M-60 10q60-40 120 0" stroke="#BD701E" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M-40 -5q40-30 80 0" stroke="#F5BC73" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M-20 -15q20-15 40 0" stroke="#F7CB91" strokeWidth="5" strokeLinecap="round" fill="none" />
            {/* Flakes */}
            <circle cx="-35" cy="40" r="3" fill="#D48632" />
            <circle cx="45" cy="38" r="2.5" fill="#E29E4D" />
            <circle cx="10" cy="48" r="2" fill="#BD701E" />
          </g>
        </svg>
      );

    case 'scone':
      return (
        <svg viewBox="0 0 300 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" fill="#F4EFEA" />
          <g transform="translate(150, 125)">
            {/* Triangular Rustic Baked Scone */}
            <path d="M0 -45l65 80l-130 0z" fill="#DCA365" stroke="#BA7E3C" strokeWidth="2" strokeLinejoin="round" />
            {/* Sugar Crust Glaze */}
            <path d="M-40 25q40-10 80 0" stroke="#FFF7ED" strokeWidth="4" strokeLinecap="round" />
            {/* Wild Blueberries inside crumb */}
            <circle cx="-15" cy="5" r="7" fill="#31395E" />
            <circle cx="20" cy="15" r="8" fill="#282E4D" />
            <circle cx="0" cy="-15" r="6" fill="#3D4675" />
            <circle cx="35" cy="30" r="6" fill="#31395E" />
          </g>
        </svg>
      );

    default: // Generic artisan cup
      return (
        <svg viewBox="0 0 300 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" fill="#F4EFEA" />
          <ellipse cx="150" cy="190" rx="75" ry="18" fill="#E6DED5" />
          <path d="M100 100q0 75 50 75t50-75z" fill="#FAF7F2" stroke="#D3C7B9" strokeWidth="2" />
          <ellipse cx="150" cy="100" rx="50" ry="16" fill="#7A401D" />
          <ellipse cx="150" cy="98" rx="35" ry="10" fill="#C87A3E" />
        </svg>
      );
  }
};

// Editorial Photographic Card for Mood Section
export const MoodEditorialCard: React.FC<{
  title: string;
  subtitle: string;
  imageType: 'pastry' | 'latte' | 'barista';
  className?: string;
}> = ({ title, subtitle, imageType, className = '' }) => {
  return (
    <div className={`overflow-hidden rounded-2xl bg-[#F4EFEA] border border-[#EAE0D3] shadow-sm ${className}`}>
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#ECE4D8]">
        {imageType === 'pastry' && <DrinkIllustration type="croissant" />}
        {imageType === 'latte' && <DrinkIllustration type="latte" />}
        {imageType === 'barista' && <DrinkIllustration type="cold_brew" />}
      </div>
      <div className="p-4 text-left">
        <h4 className="text-base font-semibold text-[#24140E]">{title}</h4>
        <p className="mt-1 text-xs text-[#7A6F68]">{subtitle}</p>
      </div>
    </div>
  );
};
