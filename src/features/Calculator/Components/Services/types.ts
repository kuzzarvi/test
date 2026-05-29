export type SocialsProps = {
    services: {
        name: string;
        isActive: boolean;
    }[];
    onChange: (name: string) => void;
}