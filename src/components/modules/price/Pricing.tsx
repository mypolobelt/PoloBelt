'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {  Truck, CreditCard, Ruler } from 'lucide-react';

const MyPoloBeltInfo = () => {
    const pricingData = [
        { quantity: '1', belt: '50', collar: '35', lead: '40', set: '60' },
        { quantity: '2-9', belt: '45', collar: '31', lead: '36', set: '54' },
        { quantity: '10-30', belt: '40', collar: '28', lead: '32', set: '48' },
        { quantity: '31-49', belt: '37.50', collar: '25', lead: '28', set: '45.50' },
        { quantity: '50+', belt: '35', collar: '23.50', lead: '26.50', set: '42' },
    ];

    const widths = [
        { type: 'Regular', width: '3cm' },
        { type: 'Slim', width: '2.5cm' },
        { type: 'Collar', width: '2.5cm' },
        { type: 'Lead', width: '2.5cm' },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-linear-to-br from-rose-600 to-rose-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">MPB</span>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">My Polo Belt</h1>
                        <p className="text-xl text-muted-foreground">Bespoke Project Information</p>
                    </div>
                </div>
                <Badge variant="secondary" className="text-sm">Premium Leather Accessories</Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Pricing Table - Takes more space */}
                <div className="lg:col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Pricing <span className="text-sm font-normal text-muted-foreground">(per design)</span>
                            </CardTitle>
                            <CardDescription>
                                Pricing is per unique design. Quantities apply to each design ordered.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-24">Quantity</TableHead>
                                        <TableHead>Belt (£)</TableHead>
                                        <TableHead>Dog Collar (£)</TableHead>
                                        <TableHead>Dog Lead (£)</TableHead>
                                        <TableHead>Collar &amp; Lead (£)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {pricingData.map((row, index) => (
                                        <TableRow key={index} className="hover:bg-muted/50">
                                            <TableCell className="font-medium">{row.quantity}</TableCell>
                                            <TableCell>£{row.belt}</TableCell>
                                            <TableCell>£{row.collar}</TableCell>
                                            <TableCell>£{row.lead}</TableCell>
                                            <TableCell className="font-semibold text-rose-600">£{row.set}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <p className="text-sm text-muted-foreground mt-4">
                                Pricing excludes delivery. Further details below.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Side Information */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Widths */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Ruler className="w-5 h-5" />
                                Widths
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-3">
                                {widths.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center bg-muted/50 rounded-lg px-4 py-3">
                                        <span className="font-medium">{item.type}</span>
                                        <Badge variant="outline">{item.width}</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Postage & Packaging */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Truck className="w-5 h-5" />
                                Postage &amp; Packaging
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <p className="text-muted-foreground">
                                P&amp;P costs are calculated on an order-by-order basis based on Royal Mail prices.
                            </p>

                            <div>
                                <p className="font-medium mb-2">International customers:</p>
                                <p className="text-muted-foreground">Quoted for Royal Mail International Tracked (package for 1 belt is 250g).</p>
                            </div>

                            <Separator />

                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span>UK Postage</span>
                                    <span className="font-semibold">£4</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Europe</span>
                                    <span className="font-semibold">£12</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2">
                                    (2nd class with online proof of postage / online tracking)
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Payment */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5" />
                                Payment
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Payment is by Bank Transfer or PayPal. Details will be on the final invoice.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Logo Stamping */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Logo Stamping</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-4">
                            <p>
                                We can create a custom logo stamp for your design. This is a £25 one-off setup fee (per logo, per design),
                                waived for orders of 30+ belts of that design.
                            </p>
                            <p className="text-muted-foreground">
                                Please supply the highest-quality artwork available. Slim width belts and dog collars may require a smaller stamp at additional cost.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-xs text-muted-foreground pt-8 border-t">
                Thank you for choosing <span className="font-semibold text-rose-600">My Polo Belt</span>
            </div>
        </div>
    );
};

export default MyPoloBeltInfo;