'use client';

import { motion } from 'framer-motion';
import PoloLogo2 from '../shared/PoloLogo2';
import { BASIC_PALETTE, THREAD_COLORS } from '@/database/constants';

const threadRows = BASIC_PALETTE.map((id) => ({ id, ...THREAD_COLORS[id] }));

export default function ThreadChart() {
    return (
        <section className="w-full bg-white">
            <PoloLogo2 />
            <div className="max-w-md mx-auto px-3 sm:px-6 py-8">
                <motion.h2
                    className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    Thread Colour Chart
                </motion.h2>

                <motion.div
                    className="overflow-x-auto border border-gray-300"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                >
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-300 bg-gray-50">
                                <th className="px-3 py-2 text-left font-bold text-gray-900 w-20">Colour</th>
                                <th className="px-3 py-2 text-left font-bold text-gray-900">Hex Code</th>
                                <th className="px-3 py-2 text-left font-bold text-gray-900">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {threadRows.map(({ id, name, hex }) => (
                                <tr key={id} className="border-b border-gray-200 last:border-b-0">
                                    <td className="px-3 py-1.5">
                                        <div
                                            className="w-8 h-5 border border-gray-300"
                                            style={{ backgroundColor: hex }}
                                        />
                                    </td>
                                    <td className="px-3 py-1.5 font-mono text-gray-700">{hex.replace('#', '')}</td>
                                    <td className="px-3 py-1.5 text-gray-700">
                                        {name}{!Number.isNaN(Number(id)) ? ` ${id}` : ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
}
