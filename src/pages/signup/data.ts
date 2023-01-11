export interface GenderOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

export interface CompanyOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}


export const gendOptions: readonly GenderOption[] = [
    { value: 'Agender', label: 'Agender', color: '#fff' },
    { value: 'Cis', label: 'Cis', color: '#fff' },
    { value: 'Cis male', label: 'Cis male', color: '#fff' },
];

export const compOptions: readonly CompanyOption[] = [
    { value: 'Music Publisher', label: 'Music Publisher', color: '#fff' },
    { value: 'Record Label', label: 'Record Label', color: '#fff' },
    { value: 'Sync Company', label: 'Sync Company', color: '#fff' },
    { value: 'Agency', label: 'Agency', color: '#fff' },
    { value: 'Etc', label: 'Etc', color: '#fff' },
];

