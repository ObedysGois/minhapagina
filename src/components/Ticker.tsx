import React from 'react';
import { TrendingUp, Package, BarChart3, Cog, Truck, Target, PieChart, Workflow } from 'lucide-react';

const Ticker = () => {
    const items = [
        { text: 'Processos Logísticos', icon: Truck },
        { text: 'Performance Operacional', icon: TrendingUp },
        { text: 'KPIs & Indicadores', icon: BarChart3 },
        { text: 'Análise de Dados', icon: PieChart },
        { text: 'BI & Dashboards', icon: Target },
        { text: 'Automação de Processos', icon: Cog },
        { text: 'Supply Chain', icon: Package },
        { text: 'Custos & Eficiência', icon: Workflow },
    ];

    // Duplicate items for seamless loop
    const allItems = [...items, ...items];

    return (
        <div className="bg-graphite-950/80 border-b border-steel-800/50 py-2.5 ticker-container">
            <div className="ticker-content">
                {allItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-steel-400 text-xs font-medium tracking-wide uppercase"
                        >
                            <Icon size={14} className="text-forest-500" />
                            <span>{item.text}</span>
                            <span className="text-steel-600 mx-4">•</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Ticker;
