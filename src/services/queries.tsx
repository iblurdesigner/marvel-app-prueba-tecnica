import { useQuery } from "@tanstack/react-query";
import { TestingService } from "./testing.service";
import { MovieDetail } from "./movieDetail.service";

export function useSeriesData() {
  return useQuery({
    queryKey: ['seriesMarvel'],
    queryFn: () => TestingService()
  })
}

export function useSerieDetail() {
  return useQuery({
    queryKey: ['serieDetail'],
    queryFn: () => MovieDetail(id)
  })
}