'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import PoloLogo2 from '../shared/PoloLogo2';
import { THREAD_COLORS } from '@/database/constants';
import { THREAD_FAMILIES, THREAD_FAMILY_MAP, THREAD_FAMILY_ORDER } from '@/database/threadChart';
import { ThreadPreviewModal } from '@/components/belt_design/ThreadPreviewModal';

export default function ThreadChart() {
    const router = useRouter();
    const [openId, setOpenId] = useState<string | null>(null);
    const [activeFamily, setActiveFamily] = useState(THREAD_FAMILIES[0].id);
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const familyGroups = useMemo(
        () =>
            THREAD_FAMILIES.map((fam) => ({
                family: fam,
                ids: THREAD_FAMILY_ORDER.filter((id) => THREAD_FAMILY_MAP[id] === fam.id),
            })),
        []
    );

    useEffect(() => {
        if (!('IntersectionObserver' in window)) return;
        const visible = new Set<string>();
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((en) => {
                    const id = en.target.getAttribute('data-family');
                    if (!id) return;
                    if (en.isIntersecting) visible.add(id);
                    else visible.delete(id);
                });
                const first = THREAD_FAMILIES.find((f) => visible.has(f.id));
                if (first) setActiveFamily(first.id);
            },
            { rootMargin: '-90px 0px -55% 0px', threshold: 0 }
        );
        Object.values(sectionRefs.current).forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, []);

    const jumpToFamily = (id: string) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const designBeltNow = () => {
        router.push('/custom-design-tool');
    };

    return (
        <section className="w-full bg-white">
            <PoloLogo2 />

            {/* Family nav */}
            <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200 px-3 sm:px-6 py-2.5">
                <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto no-scrollbar">
                    {THREAD_FAMILIES.map((fam) => {
                        const swatch = THREAD_COLORS[fam.swatch];
                        const active = activeFamily === fam.id;
                        return (
                            <button
                                key={fam.id}
                                onClick={() => jumpToFamily(fam.id)}
                                className={`shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm font-medium transition-colors ${active ? 'bg-gray-900 border-gray-900 text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-500'
                                    }`}
                            >
                                <span
                                    className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
                                    style={{ backgroundColor: swatch?.hex }}
                                />
                                {fam.name}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-3 sm:px-6 py-8">
                <motion.h2
                    className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    Thread Colour Chart
                </motion.h2>
                <p className="text-center text-sm text-gray-500 mb-8">
                    {THREAD_FAMILY_ORDER.length} shades for your bespoke polo belt. Tap any shade to see it on a belt.
                </p>

                {familyGroups.map(({ family, ids }) => (
                    <div
                        key={family.id}
                        id={family.id}
                        data-family={family.id}
                        ref={(el) => { sectionRefs.current[family.id] = el }}
                        className="py-6 border-t border-gray-100 first:border-t-0 scroll-mt-20"
                    >
                        <div className="flex items-baseline gap-2 mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{family.name}</h3>
                            <span className="text-xs text-gray-400">{ids.length} shades</span>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
                            {ids.map((id) => {
                                const t = THREAD_COLORS[id];
                                if (!t) return null;
                                return (
                                    <button
                                        key={id}
                                        onClick={() => setOpenId(id)}
                                        className="group text-left"
                                    >
                                        <div
                                            className="relative aspect-square rounded-md border border-black/10 mb-1.5 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 transition-all"
                                            style={{
                                                backgroundColor: t.hex,
                                                backgroundImage:
                                                    'repeating-linear-gradient(90deg, rgba(255,255,255,.09) 0 1.5px, transparent 1.5px 3px, rgba(0,0,0,.08) 3px 4.5px, transparent 4.5px 6px), linear-gradient(160deg, rgba(255,255,255,.10), rgba(0,0,0,.07))',
                                            }}
                                        />
                                        <div className="text-xs font-semibold text-gray-800 leading-tight truncate">{t.name}</div>
                                        <div className="text-[10px] text-gray-400 leading-tight">
                                            {/^\d+$/.test(id) ? `No. ${id}` : ''}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}

                <p className="text-center text-xs text-gray-400 mt-6">
                    Thread colours look slightly different from screen to screen. For help matching a colour, email{' '}
                    <a href="mailto:sales@mypolobelt.com" className="underline">sales@mypolobelt.com</a>.
                </p>
            </div>

            {openId && (
                <ThreadPreviewModal
                    threadId={openId}
                    allIds={THREAD_FAMILY_ORDER}
                    onNavigate={setOpenId}
                    onClose={() => setOpenId(null)}
                    ctaLabel="Design a belt now →"
                    onCta={designBeltNow}
                />
            )}
        </section>
    );
}
