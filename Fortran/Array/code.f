        PROGRAM array

        !set usings
        implicit none
        CHARACTER (len = *),parameter:: Print_format = "(i2)"
        INTEGER                      :: arr(10), i, j


        !set the array arr[i] = [i]
        DO i = 1,10
            arr(i) = i
        ENDDO

        !write the array
        DO j = 1,10
            PRINT Print_format ,arr(j)
        ENDDO

        END PROGRAM array


