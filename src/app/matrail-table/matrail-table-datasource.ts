import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MatrailTableItem {
  name: string;
  id: number;
  phone:string;
  Country:string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MatrailTableItem[] = [
  {id: 1, Country:'India',phone:'021209091209', name: 'Jayant'},
{id: 2, Country:'USA',phone:'021209091209', name: 'Helium'},
{id: 3, Country:'Russia',phone:'021209091209', name: 'Lithium'},
{id: 4, Country:'London',phone:'021209091209', name: 'Beryllium'},
{id: 5, Country:'Swiden',phone:'021209091209', name: 'Boron'},
{id: 6, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 7, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 8, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 9, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 64, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 63, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 62, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 65, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 63, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 68, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 54, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 26, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 76, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 68, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 76, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 766, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 236, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 256, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 646, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 786, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 236, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 7986, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 656, Country:'Germany',phone:'021209091209', name: 'Carbon'},
{id: 16, Country:'Germany',phone:'021209091209', name: 'Carbon'},
];

/**
 * Data source for the MatrailTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MatrailTableDataSource extends DataSource<MatrailTableItem> {
  data: MatrailTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MatrailTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MatrailTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MatrailTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
