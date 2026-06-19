'use client';

import { motion } from 'framer-motion';
import PoloLogo2 from '../shared/PoloLogo2';

type ShadeEntry = {
    shade: string | number;
    color: string;
};

type ThreadGroup = {
    id: number;
    shades: ShadeEntry[];
};

const threadGroups: ThreadGroup[] = [
    {
        id: 1,
        shades: [
            { shade: 6, color: '#fce8ed' },
            { shade: 9, color: '#f9c8d4' },
            { shade: 10, color: '#f5a0bc' },
            { shade: 19, color: '#6e1a2a' },
            { shade: 22, color: '#e8253c' },
            { shade: 27, color: '#c01a2c' },
            { shade: 46, color: '#741535' },
            { shade: 47, color: '#7c1e32' },
            { shade: 49, color: '#a0284e' },
            { shade: 50, color: '#fccede' },
            { shade: 52, color: '#f080a5' },
            { shade: 54, color: '#f4a080' },
            { shade: 57, color: '#e85868' },
            { shade: 59, color: '#801428' },
            { shade: 62, color: '#e02878' },
            { shade: 63, color: '#e87898' },
            { shade: 65, color: '#f5bece' },
            { shade: 66, color: '#f0c8d0' },
            { shade: 68, color: '#c82878' },
            { shade: 69, color: '#901848' },
            { shade: 70, color: '#601828' },
            { shade: 72, color: '#200a14' },
            { shade: 78, color: '#601020' },
            { shade: 86, color: '#504040' },
            { shade: 87, color: '#706060' },
        ],
    },
    {
        id: 2,
        shades: [
            { shade: 89, color: '#9050a8' },
            { shade: 92, color: '#7050a0' },
            { shade: 94, color: '#c8a8d8' },
            { shade: 98, color: '#602888' },
            { shade: 100, color: '#8058a8' },
            { shade: 101, color: '#9068b0' },
            { shade: 102, color: '#402878' },
            { shade: 110, color: '#5868a8' },
            { shade: 112, color: '#5080c0' },
            { shade: 123, color: '#c8b0d8' },
            { shade: 127, color: '#b098cc' },
            { shade: 129, color: '#202868' },
            { shade: 130, color: '#2848a8' },
            { shade: 131, color: '#3878e0' },
            { shade: 132, color: '#5898d0' },
            { shade: 134, color: '#3898c0' },
            { shade: 142, color: '#182058' },
            { shade: 149, color: '#205868' },
            { shade: 168, color: '#2888b0' },
            { shade: 169, color: '#38a898' },
            { shade: 170, color: '#48b8b0' },
            { shade: 185, color: '#78d0c0' },
            { shade: 186, color: '#98e0d8' },
            { shade: 187, color: '#b8e8f0' },
            { shade: 188, color: '#d0f0ec' },
        ],
    },
    {
        id: 3,
        shades: [
            { shade: 189, color: '#208840' },
            { shade: 203, color: '#88c080' },
            { shade: 205, color: '#40a060' },
            { shade: 210, color: '#186830' },
            { shade: 211, color: '#286030' },
            { shade: 212, color: '#185828' },
            { shade: 225, color: '#98c038' },
            { shade: 228, color: '#488858' },
            { shade: 230, color: '#305830' },
            { shade: 235, color: '#a0e078' },
            { shade: 238, color: '#206030' },
            { shade: 239, color: '#486820' },
            { shade: 246, color: '#78d838' },
            { shade: 253, color: '#506028' },
            { shade: 254, color: '#688038' },
            { shade: 255, color: '#c8e060' },
            { shade: 256, color: '#a8d040' },
            { shade: 264, color: '#407820' },
            { shade: 265, color: '#58a848' },
            { shade: 268, color: '#306038' },
            { shade: 269, color: '#90c088' },
            { shade: 278, color: '#c8e8b8' },
            { shade: 279, color: '#b0d0a0' },
            { shade: 280, color: '#b8e8b0' },
            { shade: 281, color: '#a8e0b8' },
        ],
    },
    {
        id: 4,
        shades: [
            { shade: 288, color: '#f8f000' },
            { shade: 290, color: '#f8e000' },
            { shade: 291, color: '#f0c800' },
            { shade: 298, color: '#d8a800' },
            { shade: 301, color: '#f87820' },
            { shade: 302, color: '#e05810' },
            { shade: 303, color: '#f8b078' },
            { shade: 304, color: '#f08028' },
            { shade: 305, color: '#f0c000' },
            { shade: 307, color: '#f8d048' },
            { shade: 308, color: '#f8e898' },
            { shade: 309, color: '#f8f0b8' },
            { shade: 310, color: '#f8f8d8' },
            { shade: 313, color: '#e8d8b0' },
            { shade: 314, color: '#d8c898' },
            { shade: 316, color: '#f0e8d8' },
            { shade: 326, color: '#f0d8c0' },
            { shade: 328, color: '#f0e0d0' },
            { shade: 329, color: '#d8c0a0' },
            { shade: 330, color: '#c8a880' },
            { shade: 332, color: '#a88060' },
            { shade: 335, color: '#886040' },
            { shade: 339, color: '#685030' },
            { shade: 341, color: '#482818' },
            { shade: 347, color: '#302010' },
        ],
    },
    {
        id: 5,
        shades: [
            { shade: 352, color: '#b83028' },
            { shade: 355, color: '#982020' },
            { shade: 358, color: '#884030' },
            { shade: 360, color: '#603828' },
            { shade: 361, color: '#ecdcc8' },
            { shade: 363, color: '#e8c8a0' },
            { shade: 365, color: '#e89840' },
            { shade: 367, color: '#e87830' },
            { shade: 368, color: '#d86818' },
            { shade: 370, color: '#f8d898' },
            { shade: 371, color: '#faf0e0' },
            { shade: 373, color: '#f0e8d8' },
            { shade: 375, color: '#faf8f0' },
            { shade: 379, color: '#b09068' },
            { shade: 380, color: '#987058' },
            { shade: 381, color: '#684838' },
            { shade: 386, color: '#c09880' },
            { shade: 392, color: '#b8a888' },
            { shade: 397, color: '#d8d0c0' },
            { shade: 399, color: '#e8e0d8' },
            { shade: 400, color: '#301808' },
            { shade: 401, color: '#180c08' },
            { shade: 410, color: '#1860c8' },
            { shade: 433, color: '#2890e8' },
            { shade: 528, color: '#88d0d0' },
        ],
    },
    {
        id: 6,
        shades: [
            { shade: 529, color: '#2098a8' },
            { shade: 530, color: '#28a0a0' },
            { shade: 840, color: '#889050' },
            { shade: 842, color: '#a8a868' },
            { shade: 843, color: '#c8c080' },
            { shade: 844, color: '#98a070' },
            { shade: 845, color: '#a8b080' },
            { shade: 846, color: '#909870' },
            { shade: 849, color: '#386848' },
            { shade: 850, color: '#205858' },
            { shade: 851, color: '#203050' },
            { shade: 856, color: '#506828' },
            { shade: 859, color: '#906848' },
            { shade: 860, color: '#685038' },
            { shade: 861, color: '#806040' },
            { shade: 862, color: '#583828' },
            { shade: 870, color: '#d8c0e0' },
            { shade: 871, color: '#c8a8d0' },
            { shade: 873, color: '#b080b8' },
            { shade: 877, color: '#a08848' },
            { shade: 878, color: '#d8b878' },
            { shade: 881, color: '#f8e8e0' },
            { shade: 882, color: '#f0c0c8' },
            { shade: 886, color: '#f0d048' },
            { shade: 888, color: '#c8a858' },
        ],
    },
    {
        id: 7,
        shades: [
            { shade: 889, color: '#a89080' },
            { shade: 892, color: '#c0b0a0' },
            { shade: 893, color: '#a09888' },
            { shade: 894, color: '#888878' },
            { shade: 895, color: '#707068' },
            { shade: 896, color: '#585850' },
            { shade: 897, color: '#383830' },
            { shade: 903, color: '#781828' },
            { shade: 905, color: '#681020' },
            { shade: 921, color: '#f08848' },
            { shade: 923, color: '#e06828' },
            { shade: 925, color: '#f07818' },
            { shade: 926, color: '#e88838' },
            { shade: 936, color: '#205030' },
            { shade: 1001, color: '#f07838' },
            { shade: 1002, color: '#f09878' },
            { shade: 1003, color: '#e87038' },
            { shade: 1004, color: '#c85828' },
            { shade: 1005, color: '#c03828' },
            { shade: 1009, color: '#981020' },
            { shade: 1089, color: '#00c8d8' },
            { shade: 1096, color: '#103030' },
            { shade: 'White', color: '#f8f8f8' },
            { shade: 'Black', color: '#080808' },
            { shade: 2, color: '#f8f0e0' },
        ],
    },
    {
        id: 8,
        shades: [
            { shade: 701, color: '#fce0e8' },
            { shade: 702, color: '#fcd0c8' },
            { shade: 703, color: '#f8c0b0' },
            { shade: 704, color: '#f0a890' },
            { shade: 705, color: '#08b8c0' },
            { shade: 706, color: '#802030' },
            { shade: 707, color: '#701828' },
            { shade: 708, color: '#282828' },
            { shade: 709, color: '#f0d8c0' },
            { shade: 710, color: '#f8f4e8' },
        ],
    },
];

function GroupColumn({ group }: { group: ThreadGroup }) {
    return (
        <div className="border border-gray-400 flex flex-col">
            {/* Header */}
            <div className="flex items-stretch border-b border-gray-400 bg-white">
                {/* Vertical labels */}
                <div className="flex items-start gap-1 sm:gap-2 px-1.5 sm:px-2 py-2 lg:py-2.5 flex-1">
                    {(['4636/25', '4591/8', 'SHADE'] as const).map((label) => (
                        <span
                            key={label}
                            style={{ writingMode: 'vertical-lr' }}
                            className="text-[6px] sm:text-[5.5px] lg:text-[7px] text-gray-500 font-medium leading-none whitespace-nowrap"
                        >
                            {label}
                        </span>
                    ))}
                </div>
                {/* Blue group number box */}
                <div
                    className="w-8 sm:w-9 lg:w-14 shrink-0 flex items-center justify-center font-bold text-xl sm:text-2xl lg:text-4xl select-none"
                    style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
                >
                    {group.id}
                </div>
            </div>

            {/* Shade rows */}
            {group.shades.map((entry, idx) => (
                <div
                    key={idx}
                    className="flex items-center border-b border-gray-200 last:border-b-0 h-6 sm:h-5 lg:h-7"
                >
                    {/* Left: dots + shade number */}
                    <div className="flex items-center gap-0.5 lg:gap-1 px-1 lg:px-1.5 shrink-0">
                        <span className="hidden sm:inline text-[7px] lg:text-[10px] text-gray-500 leading-none select-none">●</span>
                        <span className="hidden sm:inline text-[7px] lg:text-[10px] text-gray-500 leading-none select-none">●</span>
                        <span className="text-[8px] sm:text-[7px] lg:text-[10px] text-gray-800 font-medium text-right shrink-0 w-8 sm:w-8 lg:w-11 leading-none">
                            {entry.shade}
                        </span>
                    </div>

                    {/* Color swatch */}
                    <div
                        className="flex-1 h-full"
                        style={{ backgroundColor: entry.color }}
                    />
                </div>
            ))}
        </div>
    );
}

export default function ThreadChart() {
    const row1 = threadGroups.slice(0, 4);
    const row2 = threadGroups.slice(4, 8);

    return (
        <section className="w-full bg-white">
            <PoloLogo2 />
            <div className="max-w-2xl lg:max-w-5xl mx-auto px-3 sm:px-6 py-8">
                <motion.h2
                    className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    Thread Color Chart
                </motion.h2>

                {/* Groups 1–4 */}
                <motion.div
                    className="overflow-x-auto mb-5"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-3 sm:min-w-120">
                        {row1.map((g) => <GroupColumn key={g.id} group={g} />)}
                    </div>
                </motion.div>

                {/* Groups 5–8 */}
                <motion.div
                    className="overflow-x-auto"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-3 sm:min-w-120">
                        {row2.map((g) => <GroupColumn key={g.id} group={g} />)}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}