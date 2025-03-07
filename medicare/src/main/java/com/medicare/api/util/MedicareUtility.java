package com.medicare.api.util;

import org.modelmapper.ModelMapper;

public class MedicareUtility {

    private static final ModelMapper modelMapper = new ModelMapper();


    public static <T>  T toEntity(Object dto , Class<T> entity)
    {
       return modelMapper.map(dto,entity);
    }
    public static <T>  T toDto(Object entity , Class<T> dto)
    {
        return modelMapper.map(entity,dto);
    }



}
