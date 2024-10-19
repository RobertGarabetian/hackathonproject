import { ScrollArea } from "./components/ui/scroll-area";

export default function StopsList({ responseData }: any) {
  return (
    <ScrollArea className="h-96 w-full">
      {responseData?.stops ? (
        <ul className="space-y-4">
          {responseData.stops.map((stop: any, index: number) => (
            <li key={index} className="border-b pb-4 last:border-b-0">
              <h3 className="text-lg font-semibold">{stop.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {stop.description}
              </p>
              {/* <Badge variant={getWillingnessVariant(stop.willingness_score)}>
                  Willingness: {willingness_score}
                </Badge> */}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-muted-foreground">
          No stops to display yet. Plan your journey to see the list of stops.
        </p>
      )}
    </ScrollArea>
  );
}
