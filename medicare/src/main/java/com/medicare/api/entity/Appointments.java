package com.medicare.api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table( name = "APPOINTMENTS")
public class Appointments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "APPOINTMENT_ID")
    private Long aId;
    @Column(name = "P_NAME")
    private String personName;
    @Column(name = "P_AGE")
    private Integer personAge;
    @Column(name = "p_contact")
    private String personContact; //P_CONTACT
    @Column(name = "p_Desc")
    private String personDesc;
    private String status;

    @ManyToOne
    @JoinColumn(name = "HOSPITAL_ID")
    private Hospital hospital;

}
