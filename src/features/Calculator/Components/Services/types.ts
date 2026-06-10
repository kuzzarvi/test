export type SocialsProps = {
  isActive: {
    [k: string]: boolean;
  };
  onChange: (name: string) => void;
};

export type ServiceType = string;
