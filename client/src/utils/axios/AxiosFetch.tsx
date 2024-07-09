import { AxiosInterceptorProps } from "@customTypes/types";
import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { axiosInstance } from "@utils/axios/axiosFetchUtils";
import { togglePageLoader } from "@store/loader-slice/loaderSlice";

export const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const onRequest = (
            request: InternalAxiosRequestConfig
        ): InternalAxiosRequestConfig => {
            dispatch(togglePageLoader(true));
            return request;
        };
        const onResponse = (response: AxiosResponse): AxiosResponse => {
            dispatch(togglePageLoader(false));
            return response;
        };
        const onError = (error: AxiosError): Promise<AxiosError> => {
            dispatch(togglePageLoader(false));
            return Promise.reject(error);
        };
        const reqInterceptor = axiosInstance.interceptors.request.use(
            onRequest,
            onError
        );
        const resInterceptor = axiosInstance.interceptors.response.use(
            onResponse,
            onError
        );
        return () => {
            axiosInstance.interceptors.response.eject(resInterceptor);
            axiosInstance.interceptors.request.eject(reqInterceptor);
        };
    }, [dispatch]);
    return <>{children ?? null}</>;
};
