import qs from "query-string";

interface UrlQueryParams {
  key: string;
  params: string;
  value: string;
}

interface RemoveUrlQueryParams {
  keysToRemove: string[];
  params: string;
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const queryString = qs.parse(params);

  queryString[key] = value;

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const queryString = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete queryString[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    {
      skipNull: true,
    }
  );
};
