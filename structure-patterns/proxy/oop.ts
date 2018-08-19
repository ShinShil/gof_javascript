interface IDatabase {
    log(): void;
}
class Database implements IDatabase {
    public log() {
        console.log('Log from database')
    }
}

class StaticDatabaseProvider {
    static getNewDatabaseInstance(): IDatabase {
        return new Database();
    }
}

const DATABASE_ACCESS_ALLOWED = 2;

class DatabaseProxy implements IDatabase {
    public permissions: number[] = [];
    private database: IDatabase;

    log() {
        if(this.permissions.indexOf(DATABASE_ACCESS_ALLOWED) > -1) {
            if(!this.database) {
                this.database = StaticDatabaseProvider.getNewDatabaseInstance();
                console.log('Database instance has been created'); 
            }
            this.database.log();
        } else {
            console.log('You have not access to database');
        }
    }
}

const database = new DatabaseProxy();
database.log();
database.permissions.push(DATABASE_ACCESS_ALLOWED);
database.log();
database.log();