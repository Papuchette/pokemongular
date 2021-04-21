export class Pokemon {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    typesPicture: Array<string>;
    created: Date;

    constructor(
		id: number = 0,
		hp: number = 100,
		cp: number = 10,
		name: string = 'name',
		picture: string = 'http://...',
		types: Array<string> = ['Normal'],
		typesPicture: Array<string> = ['http://...'],
		created: Date = new Date()
	) {
		this.id = id,
		this.hp = hp;
		this.cp = cp;
		this.name = name;
		this.picture = picture;
		this.types = types;
        this.typesPicture = typesPicture
		this.created = created;
	}
}

