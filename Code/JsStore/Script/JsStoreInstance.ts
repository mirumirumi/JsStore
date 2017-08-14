import Model = JsStore.Model;
import DataBase = Model.DataBase;
import Column = Model.Column;
import Table = Model.Table;
module JsStore {

    export class Instance extends CodeExecutionHelper {
        constructor(dbName) {
            super();
            if (WorkerStatus == WebWorkerStatus.NotStarted) {
                Utils.setDbType();
                this.createWorker();
            }
            else {
                WorkerInstance.terminate();
                this.createWorker();
            }
            if (dbName != null) {
                this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                    Name: 'open_db',
                    Query: dbName
                });
            }
        }

        /**
         * creates DataBase
         * 
         * @param {IDataBase} dataBase 
         * @param {Function} onSuccess 
         * @param {Function} [onError=null] 
         * @returns 
         * 
         * @memberOf Main
         */
        createDb(dataBase: Model.IDataBase, onSuccess: Function, onError: Function = null) {
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'create_db',
                OnSuccess: onSuccess,
                OnError: onError,
                Query: dataBase
            });
            return this;
        }


        /**
         * drop dataBase
         * 
         * @param {Function} onSuccess 
         * @param {Function} [onError=null] 
         * @memberof Instance
         */
        dropDb(onSuccess: Function, onError: Function = null) {
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'drop_db',
                OnSuccess: onSuccess,
                OnError: onError
            });
            return this;
        }

        /**
         * select data from table
         * 
         * @param {IQuery} query 
         * @param {Function} [onSuccess=null]  
         * @param {Function} [onError=null] 
         * 
         * @memberOf Main
         */
        select(query: ISelect, onSuccess: Function = null, onError: Function = null) {
            var OnSuccess = query.OnSuccess ? query.OnSuccess : onSuccess,
                OnError = query.OnError ? query.OnError : onError;
            query.OnSuccess = null;
            query.OnError = null;
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'select',
                Query: query,
                OnSuccess: OnSuccess,
                OnError: OnError
            });
            return this;
        }

        /**
         * get no of result from table
         * 
         * @param {ICount} query 
         * @param {Function} [onSuccess=null]  
         * @param {Function} [onError=null] 
         * @memberof Instance
         */
        count(query: ICount, onSuccess: Function = null, onError: Function = null) {
            var OnSuccess = query.OnSuccess ? query.OnSuccess : onSuccess,
                OnError = query.OnError ? query.OnError : onError;
            query.OnSuccess = null;
            query.OnError = null;
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'count',
                Query: query,
                OnSuccess: OnSuccess,
                OnError: OnError
            });
            return this;
        }


        /**
         * insert data into table
         * 
         * @param {IInsert} query 
         * @param {Function} [onSuccess=null] 
         * @param {Function} [onError=null] 
         * @memberof Instance
         */
        insert(query: IInsert, onSuccess: Function = null, onError: Function = null) {
            var OnSuccess = query.OnSuccess ? query.OnSuccess : onSuccess,
                OnError = query.OnError ? query.OnError : onError;
            query.OnSuccess = null;
            query.OnError = null;
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'insert',
                Query: query,
                OnSuccess: OnSuccess,
                OnError: OnError
            });
            return this;
        }

        /**
         * update data into table
         * 
         * @param {IUpdate} query 
         * @param {Function} [onSuccess=null] 
         * @param {Function} [onError=null] 
         * @memberof Instance
         */
        update(query: IUpdate, onSuccess: Function = null, onError: Function = null) {
            var OnSuccess = query.OnSuccess ? query.OnSuccess : onSuccess,
                OnError = query.OnError ? query.OnError : onError;
            query.OnSuccess = null;
            query.OnError = null;
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'update',
                Query: query,
                OnSuccess: OnSuccess,
                OnError: OnError
            });
            return this;
        }

        /**
         * delete data from table
         * 
         * @param {IDelete} query 
         * @param {Function} [onSuccess=null] 
         * @param {Function} onError 
         * @memberof Instance
         */
        delete(query: IDelete, onSuccess: Function = null, onError: Function = null) {
            var OnSuccess = query.OnSuccess ? query.OnSuccess : onSuccess,
                OnError = query.OnError ? query.OnError : onError;
            query.OnSuccess = null;
            query.OnError = null;
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'delete',
                Query: query,
                OnSuccess: OnSuccess,
                OnError: OnError
            });
            return this;
        }

        /**
         * delete all data from table
         * 
         * @param {string} tableName 
         * @param {Function} [onSuccess=null] 
         * @param {Function} [onError=null] 
         * @memberof Instance
         */
        clear(tableName: string, onSuccess: Function = null, onError: Function = null) {
            this.prcoessExecutionOfCode(<IWebWorkerRequest>{
                Name: 'clear',
                Query: tableName,
                OnSuccess: onSuccess,
                OnError: onerror
            });
            return this;
        }
    }
}
