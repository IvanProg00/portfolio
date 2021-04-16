export interface CardEducation {
	title: string;
	school: string;
	dateStart: Date;
	dateEnd: Date;
}

export interface Types {
	name: string;
	progress: number;
}

export interface Skills {
	title: string;
	elems: Types[];
}
