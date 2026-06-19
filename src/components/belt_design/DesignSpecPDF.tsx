import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    designName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    logoCircle: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#1a1a2e',
        borderWidth: 2,
        borderColor: '#8b0000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 14,
    },
    logoText: {
        color: '#c8a96e',
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    beltImage: {
        width: '100%',
        marginBottom: 20,
        objectFit: 'contain',
    },
    infoRow: {
        flexDirection: 'row',
        gap: 30,
        marginTop: 8,
    },
    infoSection: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1a1a1a',
    },
    colorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    colorSwatch: {
        width: 14,
        height: 14,
        marginRight: 6,
    },
    colorText: {
        fontSize: 9,
        color: '#333',
    },
    infoText: {
        fontSize: 9,
        color: '#333',
        marginBottom: 12,
    },
    stampImage: {
        width: 80,
        height: 80,
    },
    noStampText: {
        fontSize: 9,
        color: '#888',
        fontStyle: 'italic',
    },
})

export interface ThreadColorDetail {
    name: string
    id: string
    hex: string
}

export interface DesignSpecPDFProps {
    designName: string
    beltImage: string | null
    threadColorDetails: ThreadColorDetail[]
    leatherColor: string
    buckleFinish: string
    stampImage: string | null
    logoUrl?: string
}

export const DesignSpecPDFDocument = ({
    designName,
    beltImage,
    threadColorDetails,
    leatherColor,
    buckleFinish,
    stampImage,
    logoUrl,
}: DesignSpecPDFProps) => (
    <Document>
        <Page size="A4" orientation="landscape" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.designName}>{designName || 'Custom Design'}</Text>
                {logoUrl ? (
                    <Image src={logoUrl} style={{ width: 52, height: 52 }} />
                ) : (
                    <View style={styles.logoCircle}>
                        <Text style={styles.logoText}>MPB</Text>
                    </View>
                )}
            </View>

            {/* Belt Canvas Image */}
            {beltImage && (
                <Image src={beltImage} style={styles.beltImage} />
            )}

            {/* Info Row */}
            <View style={styles.infoRow}>
                {/* Thread Colours */}
                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Thread colours:</Text>
                    {threadColorDetails.length > 0 ? (
                        threadColorDetails.map((tc, i) => (
                            <View key={i} style={styles.colorRow}>
                                <View style={[styles.colorSwatch, { backgroundColor: tc.hex }]} />
                                <Text style={styles.colorText}>
                                    - {tc.name.toLowerCase()} {tc.id}
                                </Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.colorText}>Not specified</Text>
                    )}
                </View>

                {/* Leather & Buckle */}
                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Leather colour:</Text>
                    <Text style={styles.infoText}>{leatherColor}</Text>
                    <Text style={styles.sectionTitle}>Buckle colour:</Text>
                    <Text style={styles.infoText}>{buckleFinish}</Text>
                </View>

                {/* Stamp */}
                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Stamp:</Text>
                    {stampImage ? (
                        <Image src={stampImage} style={styles.stampImage} />
                    ) : (
                        <Text style={styles.noStampText}>None</Text>
                    )}
                </View>
            </View>
        </Page>
    </Document>
)
