        program test

        implicit none

        integer ::  a

        write(*, *) "Please input an integer number:"
        read(*, *) a
        write(*, *) "Your input is ", a

        print*, "The integer number is ", a

        stop
        end