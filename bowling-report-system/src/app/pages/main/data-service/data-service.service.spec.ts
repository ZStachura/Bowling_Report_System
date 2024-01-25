import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  const service: DataServiceService = new DataServiceService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
